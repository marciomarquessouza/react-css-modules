import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './Heading.css';

const heading = (props) => (
  <div className={ classes.heading }>
    <div className={ classes.headingPrimary}>
      <span className={ classes.headingPrimaryMain }>Outdoors</span>
      <span className={ classes.headingPrimarySub }>is where life happens</span>
    </div>
    <Button>Discover our Tours</Button>
  </div>
);

export default heading;
