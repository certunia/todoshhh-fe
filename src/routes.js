import Main from './components/Main.svelte'
// import EmployeesIndex from './views/admin/employees/index.svelte'

// function userIsAdmin() {
	//check if user is admin and returns true or false
// }

const routes = [
	{
		name: '/',
		component: Main,
	},
// 	{ name: 'login', component: Login, layout: PublicLayout },
// 	{
// 		name: 'admin',
// 		component: AdminLayout,
// 		onlyIf: { guard: userIsAdmin, redirect: '/login' },
// 		nestedRoutes: [
// 			{ name: 'index', component: AdminIndex },
// 			{
// 				name: 'employees',
// 				component: '',
// 				nestedRoutes: [
// 					{ name: 'index', component: EmployeesIndex },
// 					{ name: 'show/:id', component: EmployeesShow },
// 				],
// 			},
// 		],
// 	},
]

export { routes }
