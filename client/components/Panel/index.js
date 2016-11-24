import React, { PropTypes } from 'react';

const { string, node } = PropTypes;

function Panel({ children, className }) {
  return (
    <div className={`panel ${className}`}>
      <div className="panel-inner">
        {children}
      </div>
    </div>
  );
}

Panel.propTypes = {
  className: string,
  children: node
};

Panel.defaultProps = {
  className: '',
};

export default Panel;
