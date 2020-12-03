import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listlabel: {
        width: "296px",
        height: "28px",
        "font-family": "Roboto",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": "18px",
        "line-height": "28px",
        "letter-spacing": "0.5px",

    "color": "rgba(0, 0, 0, 0.87)",
        "mix-blend-mode": "normal",
    }
  });
  
export const ListLabel = ({ title}) => {
    const classes = useStyles();
  return (
      <p className={classes.listlabel}>{title}</p>
  );
};
  
ListLabel.propTypes = {
  title: PropTypes.string,
};

ListLabel.defaultProps = {
  title:"blank"
};
