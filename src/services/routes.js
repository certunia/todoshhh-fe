import createRouter from '@spaceavocado/svelte-router';

import Main from '../views/Main.svelte'
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
					path: '/profile',
					component: ProfilePopup,
				}
			]
		},
	],
});
