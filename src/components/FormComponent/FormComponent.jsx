import styles from './form-component.module.css';

import Logo from '../Logo';

const FormComponent = (props) => {
	const { children, headingText, className } = props;
	return (
		<div className={`${styles.form} ${className}`}>
			<Logo />
			<h1>{ headingText }</h1>
			{ children }
	</div>
	)
}

export default FormComponent;