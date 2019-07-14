import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ children, loading, ...props }) => {
  return (
    <button className='button' disabled={loading} {...props}>
      {loading ? 'loading...' : children}
    </button>
  );
};

Button.propTypes = {
  loading: PropTypes.bool.isRequired
};

Button.defaultProps = {
  loading: false
};
export default Button;
