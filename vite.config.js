import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default ({ mode }) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};

	return defineConfig({
		plugins: [
			svelte({
				preprocess: sveltePreprocess({
					scss: { prependData: `@import 'src/styles/styles.scss';`},
					postcss: true,
				}),
				compilerOptions: {
					dev: mode !== 'production'
				},
			}),
		]
	});
}
