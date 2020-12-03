import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
  linklabel: {
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
  
export const LinkLabel = ({ label}) => {
    const classes = useStyles();
  return (
      <h1 className={classes.linklabel}>{label}</h1>
  );
};
  
LinkLabel.propTypes = {
  label: PropTypes.string,
};

LinkLabel.defaultProps = {
  label:"label"
};
