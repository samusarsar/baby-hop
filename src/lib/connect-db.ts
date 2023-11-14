import mongoose, { Mongoose } from 'mongoose';

let client: Mongoose;

const connect = async () => {
	const MONGODB_URI = process.env.MONGODB_URI;

	if (!MONGODB_URI || MONGODB_URI.length === 0) {
		throw new Error('Please add your MongoDB URI to .env.local');
	}

	if (client) {
		console.log('🚀 Cached Mongo connection');
		return client;
	}

	try {
		client = await mongoose.connect(MONGODB_URI, {
			dbName: 'baby_hop',
		});
		console.log('✅ New Mongo connection');
		return client;
	} catch (error) {
		throw new Error('❌ Connection to database failed');
	}
};

export default connect;
