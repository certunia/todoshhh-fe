import { writable } from 'svelte/store'

export const theme = writable('');

let root = document.documentElement;

function setPreferedTheme() {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		setThemeDark();
	} else {
		setThemeLight();
	}
}

function setThemeDark() {
	theme.set('dark');
	document.documentElement.classList.add('dark');
	localStorage.setItem('theme', 'dark');
	console.log(getComputedStyle(document.documentElement).getPropertyValue('--c-primary'));
	root.style.setProperty('--c-primary', '#F17105');
}

function setThemeLight() {
	theme.set('light');
	document.documentElement.classList.remove('dark');
	localStorage.setItem('theme', 'light');
	root.style.setProperty('--c-primary', '#119DA4');
}

// options: adaptive, light, dark
let settingsOption = localStorage.getItem('theme');

if (!settingsOption) settingsOption = 'adaptive';

if (settingsOption === 'adaptive') {
	setPreferedTheme();
} else if (settingsOption === 'dark' || settingsOption === 'light') {
	setThemeDark();
} else{
	setThemeLight();
}

let themeVal;

theme.subscribe(val => {
	themeVal = val;
});

export const toggleTheme = () => {
	if (themeVal === 'dark') {
		setThemeLight();
	} else {
		setThemeDark();
	}
}
