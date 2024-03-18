import styles from './forgot-password-form.module.css';

import FormComponent from '../FormComponent';
import Button from "../Button";
import Input from "../Input";

const ForgotPasswordForm = () => {
	return(
		<FormComponent
			headingText='Forgot Password?'
			className={styles.forgotPass_form}>
			<form action="">
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
		</FormComponent>
	)
}

export default ForgotPasswordForm;