import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  trash: {
  }
});
  
export const Trash = ({ message}) => {
  const classes = useStyles();
  return (
    <button
        onClick={() => alert({message})}
        className={classes.trash}
    >
        <DeleteIcon/>
    </button>
  );
};
  
Trash.propTypes = {
  message: PropTypes.string,

};

Trash.defaultProps = {
  message: "hello",
};
