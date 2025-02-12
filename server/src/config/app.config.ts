import dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
	port: parseInt(process.env.PORT || '5000', 10),
	corsOptions: {
		origin: process.env.CLIENT_URL || 'http://localhost:3000',
		credentials: true,
	},
};
