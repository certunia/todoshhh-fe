import createRouter from '@spaceavocado/svelte-router';

import Main from '../views/Main.svelte'
import LoginPopup from '../popups/Login.svelte';
import RegisterPopup from '../popups/Register.svelte';
import ProfilePopup from '../popups/Profile.svelte';

createRouter({
	routes: [
		{
			path: '/',
			component: Main,
			children: [
				{
					path: '/',
				},
				{
					path: '/login',
					component: LoginPopup,
				},
				{
					path: '/register',
					component: RegisterPopup,
				},
				{
					path: '/profile',
					component: ProfilePopup,
				}
			]
		},
	],
});
