export type NewUserData = {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
};

export type UserCredentials = {
	email: string;
	password: string;
};

export interface UserData {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	avatarUrl?: string;
	createdAt: string;
	updatedAt: string;
}
