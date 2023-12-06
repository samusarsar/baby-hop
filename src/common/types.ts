export type UserCredentials = {
	email: string;
	password: string;
};

export interface NewUserData extends UserCredentials {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
}

export type UserData = {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	avatarUrl?: string;
	hasStore?: boolean;
	storeId?: string;
	createdAt: string;
	updatedAt: string;
};

export type StoreAddress = {
	country: string;
	city: string;
	streetAddress: string;
	additionalComments: string;
};

export type StoreData = {
	username: string;
	storeName: string;
	about: string;
	doesDeliver: boolean;
	brandColor: string;
	address: StoreAddress;
};
