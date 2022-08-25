import { writable } from 'svelte/store'
import api from '../services/api'

export const todoList = writable([]);

export const getTodoList = () => {
	api('get','todoshhh')
		// .then(({ data }) => {
		// data.forEach((item) => {
		// 	item.isEdited = false;
		// });
		// todoList.set(data[0]);
	// })
}

export const addItem = () => {
	fetch('http://localhost:3000/todoshhh/0/add-item', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-store', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'include', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({text: 'Klaus', listId: '0'}) // body data type must match "Content-Type" header
	})
		.then((response) => response.json())
		.then((json) => {
			todoList.set(json[0]);
		});
}
