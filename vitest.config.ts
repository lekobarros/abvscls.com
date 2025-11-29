import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		environmentOptions: {
			nuxt: {
				domEnvironment: 'happy-dom',
			},
		},
		globals: true,
		include: [ 'app/**/*.{test,spec}.{js,ts}' ],
		exclude: [ 'node_modules', 'dist', '.nuxt', 'tests/**/*' ],
		coverage: {
			provider: 'v8',
			reporter: [ 'text', 'json', 'html' ],
			reportsDirectory: './coverage',
			include: [ 'app/**/*.{vue,ts}' ],
			exclude: [ 'node_modules', 'dist', '.nuxt', 'app/**/*.d.ts' ],
		},
	},
})
