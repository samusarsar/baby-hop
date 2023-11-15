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
		avatarUrl: {
			type: String,
			required: false,
		},
		hasStore: {
			type: Boolean,
			required: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.User ?? mongoose.model('User', UserSchema);
