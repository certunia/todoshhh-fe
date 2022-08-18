<script>
	import PopupBase from './PopupBase.svelte'
	import Input from '../components/ui/Input.svelte'
	import Button from '../components/ui/Button.svelte'
	import IconGoogle from '../components/icons/Google.svelte'
	import RouterLink from '@spaceavocado/svelte-router/component/link';

	const googleAuthURL = import.meta.env.VITE_GOOGLE_AUTH_URL;
</script>

<PopupBase title='Authentication' to='/'>
	<div class="flex items-center justify-center h-full">
		<form class='w100 mr-8'>
			<Input placeholder='Email' id='email' type='email'/>

			<Input placeholder='Password' id='password' type='password'/>

			<Button text='Log In'/>
		</form>

		<div style='width: 1px; background-color: #CECCCE; height: 240px;'></div>

		<div class='flex flex-col ml-8'>
			<div class='text-left text-lg'>Log in using:</div>

			<a href={googleAuthURL} class='h-12 my-4 text-white w100 bg-gray-800 flex items-center justify-center rounded-full'>
				<span class='mr-6'>
					<IconGoogle />
				</span>

				Google
			</a>

			<div class='whitespace-nowrap mb-3'>Don’t have an account?</div>

			<RouterLink to='/register'>Create new account</RouterLink>
		</div>
	</div>
</PopupBase>
