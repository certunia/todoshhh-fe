import { writable } from 'svelte/store'
import api from '../services/api'

export const user = writable({});

export const getUser = () => {
	console.log('getUser()');
}
