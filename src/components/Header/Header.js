import React from 'react';
import Logo from '../UI/Logos/LogoWhite';
import Heading from './Heading/Heading';
import classes from './Header.css';

const header = (props) => (
  <header className={ classes.header }>
    <div className = { classes.logoBox}>
      <Logo/>
    </div>
    <Heading/>
  </header>
);

export default header;
