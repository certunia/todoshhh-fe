import { writable } from 'svelte/store'
import api from '../services/api'

export const todoList = writable([]);

export const getTodoList = () => {
	api.get('/').then(({ data }) => {
		data.forEach((item) => {
			item.isEdited = false;
		});
		todoList.set(data);
	})
}
