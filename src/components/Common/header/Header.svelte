<script>
	import AccountSvg from './account.svelte';
	import LogoSvg from './logo.svelte';
	import SettingsSvg from './settings.svelte';
	import MainLogo from '../../icons/MainLogo.svelte';
	import { getUser, user } from '../../../store/user.js';
	import { theme, toggleTheme } from '../../../store/theme.js';
	import RouterLink from '@spaceavocado/svelte-router/component/link';

	getUser();

	let userValue;
	let isDark;

	theme.subscribe(value => {
		if (value === 'dark') {
			isDark = true// document.querySelector('#header__theme').checked = true
		} else {
			isDark = false
		}
	});

	user.subscribe(value => {
		userValue = value;
	});

	function changeTheme() {
		toggleTheme()
	}
</script>

<header class="header">
	<div class="header__logo">
		<a href="/">
			<MainLogo />
		</a>
	</div>

	<div class="header__right">
		<input
			id="header__theme"
			class="header__theme"
			type="checkbox"
			bind:checked={isDark}
			on:change={changeTheme}
		>
		<div class='header__theme__dark-bg'></div>

		{#if Object.keys(userValue).length === 0}
			<RouterLink to="/login">
				<AccountSvg alt="account" />
			</RouterLink>
		{:else}
			<RouterLink cls='header__avatar' to="/profile">
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
        background-color: var(--c-primary);
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 40px;
				position: relative;
        height: 53px;
				overflow: hidden;
        z-index: 0;
    }

		.header__logo {
				z-index: 1;
    }

    .header__avatar {
        height: 24px;
        width: 24px;
        border-radius: 50%;
				z-index: 1;
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
    .header__theme {
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
        z-index: 1;

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

    .header__theme__dark-bg {
        position: absolute;
        transform: translate(0, -50%);
        transition: all 0.6s;
        top: 50%;
        right: 100px;
				width: 0;

        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            background-color: #282828;
            position: absolute;
            transition: all 0.6s;
            transform: translate(50%, -50%);
            padding-top: 100%;
            z-index: 0;
            right: 0;
						top: 0;
						width: 100%;
        }
    }

    .header__theme:checked {
        background-color: $c-special;
    }

    .header__theme:checked + .header__theme__dark-bg {
    		width: 200%;
		}

    .header__theme:checked + .header__theme__dark-bg::after {
				width: 100%;
        background-color: #282828;
        padding-top: 100%;
        transform: translate(50%, -50%);
    }

    @media #{$desktop} {
        .header {
            //padding: 0 40px;
        }
    }
</style>
