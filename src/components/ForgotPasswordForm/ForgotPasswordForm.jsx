import styles from './forgot-password-form.module.css';

import FormComponent from '../FormComponent';
import Button from "../Button";
import Input from "../Input";

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useEmail } from '../../App';

import { RESET_PASSWORD_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';
import { LOGIN_PATH, RESET_PASSOWRD_PATH } from '../../constants/pathNames';

const ForgotPasswordForm = () => {
	const navigator = useNavigate();
	const { setBaseEmail } = useEmail();

	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');
	setBaseEmail(email);

	const onGetEmail = (event) => {
		setEmail(event);
		setError(!validateEmail(event));
	};
	const validateEmail = (email) => {
		return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
	};

	const handlePasswordReset = async () => {
		try {
			const response = await fetch(createRequestPath(RESET_PASSWORD_ENDPOINT), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email: email })
			});

			if (response.ok) {
				const data = await response.json();
				setMessage(`Click here to set new pass`);
			} else {
				throw new Error('Password reset failed');
			}
		} catch (error) {
			console.error('Password reset failed:', error);
			setMessage('Password reset failed. Please try again later.');
		}
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!error && email.trim() !== '') {
			handlePasswordReset();
		}
	};

	return(
		<FormComponent
			headingText='Forgot Password?'
			className={styles.forgotPass_form}>
			<form action="" onSubmit={handleSubmit} onReset={() => navigator(LOGIN_PATH)}>
				<Input
					placeholder='Enter your email'
					value={email}
					onChangeFunction={onGetEmail}
					error={error}
					errorMessage="*Invalid email format"
					 />
				<Button
					title='Send'
					type='submit' />
				<Button
					title='Cancel'
					type='reset'
					color='grey' />
			</form>
			{message && <p onClick={() => navigator(RESET_PASSOWRD_PATH)} className={styles.message}>{message}</p>}
		</FormComponent>
	)
}

export default ForgotPasswordForm;