import React from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';


const useStyles = makeStyles({
  button: {
    width: "328px",
    height: "52px",
    "font-family": "Roboto",
    "font-weight": "900",
    "font-size": "20px",
    "letter-spacing": "0.04em",
    "border-radius": "6px",
  }
});

export const MButton = ({ variant, disabled, color, isLoginView}) => {
  const classes = useStyles();
  return (
    <Button className={classes.button}
        variant={variant}
        disabled={disabled}
        color={color}
    >
      {isLoginView ? "Login" : "Create"}
    </Button>
  );
};
  
MButton.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  isLoginView: PropTypes.string,
};

MButton.defaultProps = {
  variant: 'contained',
  disabled: false,
  color: "primary",
  isLoginView:""
};
