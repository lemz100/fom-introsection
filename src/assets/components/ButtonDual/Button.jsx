import styles from './Button.module.less';

/** 
* For buttons that have two different styles but the same core button style, this component is good for this.
*/

function Button({ text, type }) {

    /** If type doesnt = primary, then check if it equals secondary, then its either that or null. */
  return (
    <button 
        className={`${styles.button} ${type === 'primary' ? styles.primary : (type === 'secondary' ? styles.secondary : '')}`}> 
        {text}
    </button>
  );
}

export default Button;
