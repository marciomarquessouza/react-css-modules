import React from 'react';
import classes from './LogoWhite.css';
import LogoImage from '../../../assets/img/logo-white.png';

const logoWhite = (props) => (
  <img className={ classes.logoSmall } src={ LogoImage } alt="Natours"/>
);

export default logoWhite;
