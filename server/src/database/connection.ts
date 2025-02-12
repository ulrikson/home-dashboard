import mongoose from 'mongoose';
import { dbConfig } from '../config/db.config';

export const connectToDatabase = async (): Promise<void> => {
	try {
		await mongoose.connect(dbConfig.uri);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};
