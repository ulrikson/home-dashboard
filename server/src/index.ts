import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { CostsDTO } from '../../shared/types/costs';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || '5000', 10);

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI: string =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/home-dashboard';

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch(error => {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	});

// Basic route
app.get('/api/dashboard', (_req: Request, res: Response) => {
	const responseData = {
		maintenanceCost: 100,
		electricityCost: 100,
		loanCost: 150,
	} satisfies CostsDTO;
	res.json(responseData);
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
