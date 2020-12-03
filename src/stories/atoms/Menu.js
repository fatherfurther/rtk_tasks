import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  menu: {
  }
});
  
export const Menu = ({ message}) => {
  const classes = useStyles();
  return (
    <button
        onClick={() => alert({message})}
        className={classes.edit}
    >
        <MenuIcon/>
    </button>
  );
};
  
Menu.propTypes = {
  message: PropTypes.string,

};

Menu.defaultProps = {
  message: "hello",
};
