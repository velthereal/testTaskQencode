import styles from './input.module.css';

const Input = (props) => {
	const { type,  value, placeholder, onChangeFunction, error, errorMessage } =
    props;

  	const inputClass = error ?  styles.errorInput : "";

  	return (
		<div className={styles.input}>
			<input
				type={type || "text"}
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChangeFunction(event.target.value) }
				className={inputClass} />
			{error && <p className={styles.errorMessage}>{errorMessage}</p>}
		</div>
	);
}

export default Input;