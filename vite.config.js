import react from '@vitejs/plugin-react-swc';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';
// @ts-ignore
import jsconfigPaths from 'vite-jsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// @ts-ignore
		jsconfigPaths(),
		svgr({
			svgrOptions: {
				exportType: 'default',
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: '**/*.svg',
		}),
	],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
		},
	},
	build: {
		cssMinify: 'lightningcss',
	},
});
