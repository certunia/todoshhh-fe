<script>
	import PopupBase from './PopupBase.svelte'
	import Input from '../components/ui/Input.svelte'
	import Button from '../components/ui/Button.svelte'
	import IconGoogle from '../components/icons/Google.svelte'
	import RouterLink from '@spaceavocado/svelte-router/component/link';

	const googleAuthURL = import.meta.env.VITE_GOOGLE_AUTH_URL;

	import { user } from '../store/user.js';

	let userValue;

	user.subscribe(value => {
		userValue = value;
	});
</script>

<PopupBase title='Profile' to='/'>
	<div class="flex items-center justify-center h-full">
		<form class='w100 mr-8 profile__form'>
			<Input placeholder='Email' id='email' type='email'/>

			<Input placeholder='Names' id='names' type='text'/>

			<Input placeholder='Password' id='password' type='password'/>

			<Button text='Save data'/>
		</form>

		<div style='width: 1px; background-color: #CECCCE; height: 240px;'></div>

		<div class='flex flex-col ml-8'>
			<img class='profile__avatar' src={userValue.image} alt=''>

			<RouterLink to='/logout'>Logout</RouterLink>
		</div>
	</div>
</PopupBase>

<style>
	.profile__avatar {
			border-radius: 50%;
			margin: 0 0 20px 0;
			width: 180px;
  }

	.profile__form {
			max-width: 290px;
  }
</style>
