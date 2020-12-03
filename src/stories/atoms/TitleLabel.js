import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titlelabel: {
        width: "148px",
        height: "40px",
        "font-family": "Comfortaa",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": "36px",
        "line-height": "40px",
        "display": "flex",
        "align-items": "center",
        "letter-spacing": "-0.015em",

        "color": "#000000",
    }
  });
  
export const TitleLabel = ({ isLoginView}) => {
    const classes = useStyles();
  return (
      <h1 className={classes.titlelabel}>{isLoginView ? "Login" : "Register"}</h1>
  );
};
  
TitleLabel.propTypes = {
  isLoginView: PropTypes.string,
};

TitleLabel.defaultProps = {
  isLoginView:""
};
