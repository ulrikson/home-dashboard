const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/home-dashboard';

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	});

// Basic route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Home Dashboard API' });
});

// Start server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
