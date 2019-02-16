import React from 'react';
import PropTypes from 'prop-types';
import LogoImage from '../../../assets/img/logo-white.png';

const logoWhite = (props) => (
  <img src={ LogoImage } alt="Natours" height={ props.height } />
);

logoWhite.propTypes = {
  height: PropTypes.string.isRequired,
};

export default logoWhite;
