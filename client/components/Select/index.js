import React, { PropTypes } from 'react';
import './style.css';

const { string, bool, func, arrayOf, shape } = PropTypes;

/**
 * Generate list of options
 * @param {Array} of objects
 * @return {Array} of nodes
 */
const getOptionsTemplate = items => items.map((item, key) => (
  <option
    className="select-item"
    key={key}
    value={item.value}
  >
    {item.title}
  </option>
));

function Select({ label, disabled, value, items, onChange }) {
  const options = getOptionsTemplate(items);

  return (
    <div className="select-wrapper">
      <p className="select-label">{label}</p>
      <select
        className="select"
        disabled={disabled}
        value={value}
        onChange={onChange}
      >
        {options}
      </select>
    </div>
  );
}

Select.propTypes = {
  disabled: bool,
  items: arrayOf(shape({
    value: string,
    title: string
  })).isRequired,
  label: string,
  onChange: func.isRequired,
  value: string.isRequired,
};

Select.defaultProps = {
  items: [],
  value: ''
};

export default Select;
