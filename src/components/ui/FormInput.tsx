import React from 'react';

const FormInput = ({
	label,
	isInvalid,
	error,
	children,
}: {
	label?: string;
	isInvalid?: boolean;
	error?: string;
	children: React.ReactNode;
}) => {
	return (
		<div className='form-control'>
			{label && (
				<label className='label'>
					<span className='label-text text-lg'>{label}</span>
				</label>
			)}
			{children}
			{isInvalid && error && (
				<label className='label'>
					<span className='label-text text-error'>{error}</span>
				</label>
			)}
		</div>
	);
};

export default FormInput;
