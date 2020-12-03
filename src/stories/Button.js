import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }) => {
  return (
    <button
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {

  label: PropTypes.string.isRequired,

};

