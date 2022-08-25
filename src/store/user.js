import { writable } from 'svelte/store'
import api from '../services/api'

export const user = writable({});

export const getUser = () => {
	api('get', 'auth/me')
		// .then(({ data }) => {
		// 	user.set(data);
		// })
		// .catch(() => {
		// 	console.log('err');
		// })
}
