import styles from './reset-password-form.module.css';

import Logo from '../Logo';
import Button from "../Button";
import Input from "../Input";

const ResetPasswordForm = () => {
	return (
		<div className={styles.resetPass_form}>
			<Logo />
			<form action="">
				<h1>Create new Password?</h1>
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
		</div>
	)
}

export default ResetPasswordForm;