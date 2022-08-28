import { writable } from 'svelte/store'
import api from '../services/api'

export const todoList = writable([]);

export const getTodoList = () => {
	api('get','todoshhh')
		.then((data) => {
			data.forEach((item) => {
			item.isEdited = false;
		});
		todoList.set(data[0]);
	})
}

export const addTodoList = () => {
	api('post','todoshhh/add-list')
	// .then(({ data }) => {
	// data.forEach((item) => {
	// 	item.isEdited = false;
	// });
	// todoList.set(data[0]);
	// })
}

export const addItem = () => {
	api('post','todoshhh/0/add-item', {text: 'Klaus'})
		.then((data) => {
			todoList.set(data[0]);
		})
}

export const deleteItem = (listIndex, itemIndex) => {
	api('delete',`todoshhh/${listIndex}/delete-item/${itemIndex}`)
		.then((data) => {
			todoList.set(data[0]);
		})
}
