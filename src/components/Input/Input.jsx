import styles from './input.module.css';

const Input = (props) => {
	const { type, validation, value, placeholder, onChangeFunction } =
    props;

  	const inputClass = validation ? "" : styles.errorInput;

	const errorMessage = () => {
		if (type === 'email') {
            return '*Invalid email format';
        } else if (type === 'password') {
            return '*Password must contain at least 8 characters';
        }
	}

  	return (
		<>
			<input
				type={type || "text"}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChangeFunction(event.target.value)}
				className={inputClass} />
			{!validation && <p className={styles.errorMessage}>{ errorMessage() }</p>}
		</>
	);
}

export default Input;