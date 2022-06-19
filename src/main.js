import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

console.log(process.env.MY_API_KEY);

export default app;
