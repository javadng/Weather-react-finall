import React, { useRef, useState } from 'react';

import Button from '../button/Button';
import Input from '../Input/Input';
import classes from './Search.module.scss';

const Search = props => {
  const [searchInput, setSerachInput] = useState('');
  const inputRef = useRef();
  const styles = `${classes.form} ${props.className}`;

  const submitSearchHandler = e => {
    e.preventDefault();

    if (searchInput.trim().length < 3) return console.error('query too short');

    props.onSubmit(searchInput);
    setSerachInput('');
  };

  const chagenInputHandler = e => {
    setSerachInput(e.target.value);
  };

  return (
    <form className={styles} onSubmit={submitSearchHandler}>
      <Input
        className={classes.header__search}
        type="text"
        placeholder="Search..."
        ref={inputRef}
        onChange={chagenInputHandler}
        value={searchInput}
      />
      <Button className={classes.header__btn}>Search</Button>
    </form>
  );
};

export default Search;
