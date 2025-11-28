import { spawn } from 'child_process'

export default defineNuxtPlugin(() => {
	// Run ESLint only in development mode
	if (import.meta.dev) {
		const eslint = spawn('npx', [ 'eslint', '.', '--fix' ], {
			stdio: 'inherit',
			shell: true,
		})

		eslint.on('error', (error) => {
			console.error('[ESLint Plugin] Error:', error.message)
		})
	}
})
