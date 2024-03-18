import styles from './reset-password-form.module.css';

import FormComponent from '../FormComponent';
import Button from "../Button";
import Input from "../Input";

const ResetPasswordForm = () => {
	return (
		<FormComponent
			className={styles.resetPass_form}
			headingText='Create new Password?'>
				<form action="">
					<label htmlFor="">Password</label>
					<Input
						type='password'
						placeholder='Password'
						// value={value}
						// onChange={(event) => onChangeFunction(event.target.value)}
						/>
					<label htmlFor="">Confirm Password</label>
					<Input
						type='password'
						placeholder='Password'
						// value={value}
						// onChange={(event) => onChangeFunction(event.target.value)}
						/>
					<Button
						title='Reset Password'
						type='submit'
						/*onClick={() => onClickFunction  && onClickFunction() }*/ />
				</form>
		</FormComponent>
	)
}

export default ResetPasswordForm;