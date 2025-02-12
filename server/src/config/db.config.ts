export const dbConfig = {
	uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/home-dashboard',
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
};
