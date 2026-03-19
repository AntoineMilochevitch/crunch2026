import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// important pour GitHub Pages: évite les 404 au refresh en SPA
			fallback: '404.html'
		}),

		// IMPORTANT: adapte "crunch2026" au nom EXACT du repo
		paths: {
			base: process.env.BASE_PATH ?? ''
		}
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) =>
			filename.includes('node_modules') ? undefined : { runes: true }
	}
};

export default config;
