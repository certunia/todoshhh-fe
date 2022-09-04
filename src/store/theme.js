import { writable } from 'svelte/store'

export const theme = writable('');

function getPreferedTheme() {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';// dark mode
	} else {
		return 'light';// dark mode
	}
}

function setCssVariable() {
	document.documentElement.setAttribute("style", "--c-special__inversable: red");
	root.style.setAttribute("--c-special__inversable", 'red');
}

// options: adaptive, light, dark
let settingsOption = localStorage.getItem('theme');

if (!settingsOption) settingsOption = 'adaptive';

if (settingsOption === 'adaptive') {
	theme.set(getPreferedTheme());
	setCssVariable()
} else if (settingsOption === 'dark' || settingsOption === 'light') {
	theme.set(settingsOption);
	document.documentElement.classList.add('dark');
} else{
	theme.set('light');
	document.documentElement.classList.remove('dark');
}

let themeVal;

theme.subscribe(val => {
	themeVal = val;
});

export const toggleTheme = () => {
	if (themeVal === 'dark') {
		theme.set('light');
		localStorage.setItem('theme', 'light')
	} else {
		theme.set('dark');
		localStorage.setItem('theme', 'dark')
	}
}
