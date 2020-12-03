import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    width: "328px",
    height: "52px",
    left: "16px",
    right: "16px",
    top: "157px",
      
    background: "#FFFFFF",
    border: "2px solid #000000",
    "box-sizing": "border-box",
      
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "15px",
    "line-height": "18px",
    display: "flex",
    "align-items": "center",
    "padding-left": "17px",
      
    color: "rgba(0, 0, 0, 0.5)",
  }
});
  
export const Input = ({ type, name, placeholder}) => {
    const classes = useStyles();
  return (
    <input  className={classes.input}
        type={type} 
        name={name}
        placeholder={placeholder}
        required
        />
        
  );
};
  
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,

};

Input.defaultProps = {
  type: "text",
  name: "name",
  placeholder: "placeholder",
};
