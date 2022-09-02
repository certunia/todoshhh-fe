import { writable } from 'svelte/store'
import api from '../services/api'

export const todoList = writable([]);

export const getTodoList = () => {
	api('get','todoshhh')
		.then((data) => {
			setToDoList(data[0]);
		})
}

export const addTodoList = () => {
	api('post','todoshhh/add-list')
	.then((data) => {
		setToDoList(data[0]);
	})
}

export const addItem = async (text) => {
	api('post','todoshhh/0/add-item',{ text })
		.then((data) => {
			setToDoList(data[0]);
		})
}

export const changeItem = (listIndex, itemIndex, data) => {
	api('patch', `todoshhh/${listIndex}/${itemIndex}`, data)
		.then((data) => {
			setToDoList(data[0]);
		})
}

export const swapItems = (data) => {
	api('patch', `todoshhh/swap-items`, data)
}

export const deleteItem = (listIndex, itemIndex) => {
	api('delete',`todoshhh/${listIndex}/delete-item/${itemIndex}`)
		.then((data) => {
			setToDoList(data[0]);
		})
}

function setToDoList(arr) {
	const array = [];
	arr.forEach((item) => {
		if (item === null)
		{
			item = {};
		}
		item.id = Math.random();
		item.isEdited = false;
		array.push(item);
	});
	todoList.set(array);
}
