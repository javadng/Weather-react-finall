import classes from './Button.module.scss';

const Button = props => {
  const styles = `${classes.btn} ${props.className}`;
  
  return (
    <button className={styles} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
