import mongoose from 'mongoose';

const AddressSubSchema = new mongoose.Schema({
	country: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	streetName: {
		type: String,
		required: true,
	},
	streetNumber: {
		type: String,
		required: true,
	},
	additionalComments: {
		type: String,
	},
});

const DatesBookedSubSchema = new mongoose.Schema({
	date: {
		type: Date,
		required: true,
	},
	customer: {
		type: String,
		required: true,
	},
	delivery: Boolean,
	deliveryAddress: AddressSubSchema,
	pickup: Boolean,
	pickupAddress: AddressSubSchema,
});

const ProductsSubSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	datesBooked: {
		type: [DatesBookedSubSchema],
	},
	productImages: {
		type: [String],
		required: true,
	},
	details: {
		type: String,
	},
});

const StoreSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		storeName: String,
		about: String,
		doesDeliver: {
			type: Boolean,
			required: true,
		},
		address: {
			type: AddressSubSchema,
			required: true,
		},
		brandColor: String,
		products: {
			type: [ProductsSubSchema],
		},
	},
	{ timestamps: true }
);

export default mongoose.models?.Store ?? mongoose.model('Store', StoreSchema);
