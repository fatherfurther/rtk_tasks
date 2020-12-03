import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
  username: {
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
  
export const Username = ({ username}) => {
    const classes = useStyles();
  return (
    <p className={classes.username}>{username}</p>
  );
};
  
Username.propTypes = {
  label: PropTypes.string,
};

Username.defaultProps = {
  label:"label"
};
