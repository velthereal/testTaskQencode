import styles from './login-form.module.css';

import Logo from '../Logo';
import Button from "../Button";
import OrComponent from '../OrComponent';
import Input from "../Input";

import icon_google from '../../images/icons/google.png';
import icon_gitnub from '../../images/icons/github.png';

const LogInForm = () => {
	return (
		<div className={styles.login_form}>
			<Logo />
			<form action="">
				<h1>Log in to your account</h1>
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
					// value={value}
					// onChange={(event) => onChangeFunction(event.target.value)}
					 />
				<Button
					title='Log in to Qencode'
					type='submit'
					className={styles.login_btn}
					/*onClick={() => onClickFunction  && onClickFunction() }*/ />
			</form>
			<p className={styles.signup_q}>Is your company new to Qencode? <span>Sign up</span></p>
		</div>
	)
}

export default LogInForm;