import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const button = (props) => (
  <a
    href="www.uol.com.br"
    className={[
      classes.button,
      classes.buttonWhite, 
      classes.buttonAnimation
      ].join(" ") }
  >
    { props.children }
  </a>
);

button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default button;
