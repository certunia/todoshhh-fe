<script>
	// import { page } from '$app/stores';
	import AccountSvg from './account.svelte';
	import LogoSvg from './logo.svelte';
	import SettingsSvg from './settings.svelte';
	import MainLogo from '../../icons/MainLogo.svelte';
	import { getUser, user } from '../../../store/user.js';
	import RouterLink from '@spaceavocado/svelte-router/component/link';

	getUser();

	let userValue;

	user.subscribe(value => {
		userValue = value;
	});
</script>

<header class="header">
	<div class="header__logo">
		<a href="/">
			<MainLogo />
		</a>
	</div>

	<div class="header__right">
		<input id="toggle" class="toggle" type="checkbox">

		{#if Object.keys(userValue).length === 0}
			<RouterLink to="/login">
				<AccountSvg alt="account" />
			</RouterLink>
		{:else}
			<RouterLink to="/profile">
				<img class='header__avatar' src={userValue.image} alt=''>
			</RouterLink>
		{/if}

<!--		<RouterLink to="/settings">-->
<!--			<SettingsSvg alt="settings" />-->
<!--		</RouterLink>-->
	</div>
</header>

<style lang="scss" global>
	.header {
		align-items: center;
		background-color: $c-special;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0 40px;
		height: 53px;
	}

	.header__avatar {
			height: 24px;
			width: 24px;
			border-radius: 50%;
  }

	.header__right {
		display: flex;
		align-items: center;
		justify-content: space-between;

		a {
			margin: 0 0 0 26px;
		}
	}

	// magic
	.toggle {
		--size: 21px;

		appearance: none;
		border-radius: 999px;
		box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
		color: #fff;
		cursor: pointer;
		height: var(--size);
		margin: 0 0 2px;
		outline: none;
		transition: all 500ms;
		width: var(--size);

		&:checked {
			--ray-size: calc(var(--size) * -0.4);
			--offset-orthogonal: calc(var(--size) * 0.65);
			--offset-diagonal: calc(var(--size) * 0.45);

			transform: scale(0.75);
			color: #fff;
			box-shadow:
					inset 0 0 0 var(--size),
					calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
					var(--offset-orthogonal) 0 0 var(--ray-size),
					0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
					0 var(--offset-orthogonal) 0 var(--ray-size),
					calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
					var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
					calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
					var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
		;
		}
	}

	@media #{$desktop} {
		.header {
			//padding: 0 40px;
		}
	}
</style>
