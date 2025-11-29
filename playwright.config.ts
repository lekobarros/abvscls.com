import { defineConfig, devices } from '@playwright/test'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('')`. */
		// baseURL: 'http://localhost:3000',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
	},

	/* Configure projects for major browsers and devices */
	projects: [
		// ==========================================
		// DESKTOP - Resoluções mais comuns
		// ==========================================

		// Windows - Chrome (resolução mais comum: 1920x1080)
		{
			name: 'Desktop Chrome 1920x1080',
			use: {
				...devices['Desktop Chrome'],
				viewport: { width: 1920, height: 1080 },
			},
		},
		// Windows - Chrome (resolução comum: 1366x768)
		{
			name: 'Desktop Chrome 1366x768',
			use: {
				...devices['Desktop Chrome'],
				viewport: { width: 1366, height: 768 },
			},
		},
		// Windows - Chrome (resolução comum: 1536x864)
		{
			name: 'Desktop Chrome 1536x864',
			use: {
				...devices['Desktop Chrome'],
				viewport: { width: 1536, height: 864 },
			},
		},

		// Windows - Edge
		{
			name: 'Desktop Edge',
			use: {
				...devices['Desktop Edge'],
				channel: 'msedge',
				viewport: { width: 1920, height: 1080 },
			},
		},

		// macOS - Safari (WebKit)
		{
			name: 'Desktop Safari',
			use: {
				...devices['Desktop Safari'],
				viewport: { width: 1440, height: 900 },
			},
		},

		// ==========================================
		// MOBILE - iOS (Safari)
		// ==========================================

		// iPhone 14 Pro Max
		{
			name: 'iPhone 14 Pro Max',
			use: { ...devices['iPhone 14 Pro Max'] },
		},
		// iPhone 13
		{
			name: 'iPhone 13',
			use: { ...devices['iPhone 13'] },
		},
		// iPhone SE (tela menor)
		{
			name: 'iPhone SE',
			use: { ...devices['iPhone SE'] },
		},

		// ==========================================
		// MOBILE - Android (Chrome)
		// ==========================================

		// Samsung Galaxy S23 (flagship Android)
		{
			name: 'Galaxy S23',
			use: {
				...devices['Pixel 7'],
				viewport: { width: 360, height: 780 },
			},
		},
		// Pixel 7
		{
			name: 'Pixel 7',
			use: { ...devices['Pixel 7'] },
		},
		// Samsung Galaxy Tab
		{
			name: 'Galaxy Tab S4',
			use: {
				...devices['Galaxy Tab S4'],
			},
		},
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   url: 'http://localhost:3000',
	//   reuseExistingServer: !process.env.CI,
	// },
})
