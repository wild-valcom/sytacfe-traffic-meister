import React, { PropTypes } from 'react';
import './style.css';

const { string, func } = PropTypes;

function Button({ title, type, onClick, className }) {
  return (
    <button
      className={`btn ${className}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  className: string,
  title: string,
  type: string,
  onClick: func
};

Button.defaultProps = {
  className: '',
  title: 'Button',
  type: 'button',
  onClick: () => {},
};

export default Button;
