import styles from './input.module.css';

import eye from '../../images/icons/eye.png';

const Input = (props) => {
	const { type, value, placeholder, onChangeFunction, error, errorMessage } =
    props;

  	const inputClass = error ?  styles.errorInput : "";
	const passwordClass = type === 'password' ? styles.passwordClass : styles.notPassword;

  	return (
		<div className={styles.input}>
			<input
				type={type || "text"}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChangeFunction(event.target.value) }
				className={inputClass} />
			{passwordClass && <span className={passwordClass}><img src={eye} alt="" /></span>}
			{error && <p className={styles.errorMessage}>{errorMessage}</p>}
		</div>
	);
}

export default Input;