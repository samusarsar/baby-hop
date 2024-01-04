import {
	NAME_MAX_LENGTH,
	NAME_MIN_LENGTH,
	PASSWORD_MIN_LENGTH,
	STORE_NAME_MAX_LENGTH,
	STORE_NAME_MIN_LENGTH,
	USERNAME_MAX_LENGTH,
	USERNAME_MIN_LENGTH,
} from '@/common/constants';

export const isUsernameValid = (username: string): boolean => {
	return (
		!!username &&
		!!username.length &&
		username.length >= USERNAME_MIN_LENGTH &&
		username.length <= USERNAME_MAX_LENGTH
	);
};

export const isFirstOrLastNameValid = (name: string): boolean => {
	return (
		!!name &&
		!!name.length &&
		name.length >= NAME_MIN_LENGTH &&
		name.length <= NAME_MAX_LENGTH
	);
};

export const isEmailValid = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return emailRegex.test(email);
};

export const isPasswordValid = (password: string): boolean => {
	const isLengthValid = password.length >= PASSWORD_MIN_LENGTH;

	const hasUpperCase = /[A-Z]/.test(password);

	const hasLowerCase = /[a-z]/.test(password);

	const hasDigit = /\d/.test(password);

	return isLengthValid && hasUpperCase && hasLowerCase && hasDigit;
};

export const isStoreNameValid = (storeName: string): boolean => {
	return (
		!!storeName &&
		!!storeName.length &&
		storeName.length >= STORE_NAME_MIN_LENGTH &&
		storeName.length <= STORE_NAME_MAX_LENGTH
	);
};

export const isBrandColorValid = (brandColor: string): boolean => {
	return brandColor !== 'default';
};
