import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listitem: {
  }
});
  
export const ListItem = ({ message}) => {
  const classes = useStyles();
  return (
    <button
        onClick={() => alert({message})}
        className={classes.edit}
    >
    </button>
  );
};
  
Edit.propTypes = {

};

Edit.defaultProps = {
};
