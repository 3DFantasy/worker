// global.d.ts

// Declare global environment variables
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: string
			PORT: string
			APP_SECRET: string
			REDIS_QUEUE: string
			REDIS_USERNAME: string
			REDIS_HOST: string
			REDIS_PORT: string
			REDIS_PASSWORD: string
			TEAM_1_URL: string
			TEAM_2_URL: string
			TEAM_3_URL: string
			TEAM_4_URL: string
			TEAM_5_URL: string
			TEAM_6_URL: string
			TEAM_7_URL: string
			TEAM_8_URL: string
			TEAM_9_URL: string
		}
	}
}

export {} // Ensure it's treated as a module
