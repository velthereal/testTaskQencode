import styles from './button.module.css';

import classNames from 'classnames';

const Button = (props) => {
    const { type, title, onClickFunction, className, color, children } = props;

	const butonClassName = classNames(styles.blue, {
        [styles.grey] : color === 'grey',
    });
    
    return (
        <button 
            type={type}
            onClick={() => onClickFunction  && onClickFunction() }
			className={`${className} ${butonClassName}`}
        >
            {children} { title }
        </button>
    );
}

export default Button; 