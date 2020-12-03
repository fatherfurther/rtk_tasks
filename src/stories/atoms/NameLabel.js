import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
  namelabel: {
    "font-family": "Comfortaa",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "15px",
    "line-height": "17px",
    
    "display": "flex",
    "align-items": "center",
    "letter-spacing": "-0.015em",
    
    "color": "#000000",
    }
  });
  
export const NameLabel = ({ label}) => {
    const classes = useStyles();
  return (
      <p className={classes.namelabel}>{label}</p>
  );
};
  
NameLabel.propTypes = {
  label: PropTypes.string,
};

NameLabel.defaultProps = {
  label:"label"
};
