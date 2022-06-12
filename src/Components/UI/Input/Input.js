import React from 'react';

import classes from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  const styles = `${classes.input__field} ${props.className}`;

  return (
    <input
      ref={ref}
      placeholder={props.placeholder}
      className={styles}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
    />
  );
});

export default Input;
