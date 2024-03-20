import styles from './reset-password-form.module.css';

import FormComponent from '../FormComponent';
import Button from "../Button";
import Input from "../Input";

import { useState } from 'react';
import { useEmail } from '../../App';

import { SET_NEW_PASSWORD_ENDPOINT } from '../../constants/endpoints';
import { createRequestPath } from '../../helpers/helpers';

const ResetPasswordForm = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({ password: false, confirmPassword: false });
	const [message, setMessage] = useState('');

	const { baseEmail } = useEmail();

	const validatePassword = (password) => {
        return password.length >= 8;
    };

	const onGetPassword = (value) => {
		setPassword(value);
		setErrors({ ...errors, password: !validatePassword(value) });
	};
	const onGetConfirmPassword = (value) => {
		setConfirmPassword(value);
		setErrors({ ...errors, confirmPassword: !validatePassword(value) });
	};

	const resetPassword = async () => {
		if (password !== confirmPassword || !validatePassword(password)) {
			setErrors({ ...errors, confirmPassword: true });
			return;
		}

        try {
            const response = await fetch(createRequestPath(SET_NEW_PASSWORD_ENDPOINT), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: baseEmail,
					password: password
                })
            });
            
            if (response.ok) {
				setMessage('Congratulations, you have created a new password');
            } else {
				setMessage(`Password reset failed`);
            }
        } catch (error) {
			setMessage(`Password reset failed`);
        }
    };


	return (
		<FormComponent
			className={styles.resetPass_form}
			headingText='Create new Password?'>
				<form action="" onSubmit={(e) => { e.preventDefault(); resetPassword(); }}>
					<label htmlFor="">Password</label>
					<Input
						type='password'
						placeholder='Password'
						value={password}
						onChangeFunction={onGetPassword}
						error={errors.password}
						errorMessage='*Password must contain at least 8 characters'
						/>
					<label htmlFor="">Confirm Password</label>
					<Input
						type='password'
						placeholder='Password'
						value={confirmPassword}
						error={errors.confirmPassword}
						onChangeFunction={onGetConfirmPassword}
						errorMessage='*Passwords do not match'
						/>
					<Button
						title='Reset Password'
						type='submit'
						/*onClick={() => onClickFunction  && onClickFunction() }*/ />
				</form>
				{message && <p className={styles.errorMessage}>{message}</p>}
		</FormComponent>
	)
}

export default ResetPasswordForm;