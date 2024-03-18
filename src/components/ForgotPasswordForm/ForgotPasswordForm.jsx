import styles from './forgot-password-form.module.css';

import Logo from '../Logo';
import Button from "../Button";
import Input from "../Input";

const ForgotPasswordForm = () => {
	return(
		<div className={styles.forgotPass_form}>
			<Logo />
			<form action="">
				<h1>Forgot Password?</h1>
				<Input
					type='email'
					placeholder='Enter your email'
					// value={value}
					// onChange={(event) => onChangeFunction(event.target.value)}
					 />
				<Button
					title='Send'
					type='submit'
					/*onClick={() => onClickFunction  && onClickFunction() }*/ />
				<Button
					title='Cancel'
					type='submit'
					color='grey'
					/*onClick={() => onClickFunction  && onClickFunction() }*/ />
			</form>
		</div>
	)
}

export default ForgotPasswordForm;