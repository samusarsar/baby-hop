import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatarUrl: String,
		hasStore: Boolean,
		storeId: ObjectId,
	},
	{ timestamps: true }
);

export default mongoose.models?.User ?? mongoose.model('User', UserSchema);
