import styles from './login-form.module.css';

import FormComponent from '../FormComponent';
import Button from "../Button";
import OrComponent from '../OrComponent';
import Input from "../Input";

import icon_google from '../../images/icons/google.png';
import icon_gitnub from '../../images/icons/github.png';

import { useState } from 'react';
import { useNavigate } from 'react-router';

import { FORGOT_PASSWORD_PATH } from '../../constants/pathNames';

const LogInForm = () => {
	const navigator = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPasswordInput, setShowPasswordInput] = useState(false);
	const [errors, setErrors] = useState({ email: false, password: false });

	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};
	const validatePassword = (password) => {
        return password.length >= 8;
    };

	const onGetEmail = (event) => {
		const emailValue = event.trim();
		setEmail(event);
		setShowPasswordInput(emailValue !== '');
		setErrors({ ...errors, email: !validateEmail(emailValue) });
	};
	const onGetPassword = (value) => {
		setPassword(value);
		setErrors({ ...errors, password: !validatePassword(value) });
	};
	const onSubmitData = (e) => {
		e.preventDefault();

		const emailError = !validateEmail(email);
		const passwordError = !validatePassword(password);

		setErrors({ email: emailError, password: passwordError });

		if(!emailError && !passwordError){

		}
	};

	return (
		<FormComponent
			headingText='Log in to your account'
			className={styles.login_form}>
			<form action="" onSubmit={onSubmitData}>
				<div className={styles.login_with}>
					<Button
						type='button'
						title='Google'
						color='grey'>
						<img src={icon_google} alt="" />
					</Button>
					<Button
						type='button'
						title='GitHub'
						color='grey'>
						<img src={icon_gitnub} alt="" />
					</Button>
				</div>
				<OrComponent />
				<Input
					type='email'
					placeholder='Work email'
					value={email}
					onChangeFunction={onGetEmail}
					error={errors.email}
					errorMessage="*Invalid email format"
					/>
				{showPasswordInput && (
                   <div>
						<Input
							type='password'
							placeholder='Password'
							value={password}
							onChangeFunction={onGetPassword}
							error={errors.password}
							errorMessage="*Password must contain at least 8 characters"
						/>
						<p onClick={navigator(FORGOT_PASSWORD_PATH)} className={styles.forgotPass}>Forgot your password?</p>
				   </div>
                )}
				<Button
					title='Log in to Qencode'
					type='submit'
					className={styles.login_btn} />
				<p className={styles.signup_q}>Is your company new to Qencode? <span>Sign up</span></p>
			</form>
		</FormComponent>
	)
}

export default LogInForm;