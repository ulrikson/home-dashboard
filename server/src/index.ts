import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { appConfig } from './config/app.config';
import { connectToDatabase } from './database/connection';
import dashboardRoutes from './routes/dashboard.routes';

const app = express();

// Middleware
app.use(cors(appConfig.corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', dashboardRoutes);

// Initialize server
const startServer = async (): Promise<void> => {
	try {
		await connectToDatabase();
		app.listen(appConfig.port, () => {
			console.log(`Server is running on port ${appConfig.port}`);
		});
	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
};

startServer();
