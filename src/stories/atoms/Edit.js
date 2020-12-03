import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  edit: {
  }
});
  
export const Edit = ({ message}) => {
  const classes = useStyles();
  return (
    <button
        onClick={() => alert({message})}
        className={classes.edit}
    >
        <EditIcon/>
    </button>
  );
};
  
Edit.propTypes = {
  message: PropTypes.string,

};

Edit.defaultProps = {
  message: "hello",
};
