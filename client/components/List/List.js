import React, { PropTypes } from 'react';
import ListItem from './ListItem';

import './style.css';

const { string, arrayOf, object, func } = PropTypes;

/**
 * Generate List Items
 * @param {Array} of vehicles objects
 * @param {Func} is a button handler
 * @param {String} is a button title
 * @return {Array} of ListItem
 */
function getListItem(items, onClick, buttonText) {
  return items.map((item, key) => (
    <ListItem
      key={key}
      item={item}
      onClick={onClick}
      buttonText={buttonText}
    />
  ));
}

function List({ items, onClick, buttonText }) {
  const listItems = getListItem(items, onClick, buttonText);

  return (
    <ul className="list">
      {listItems}
    </ul>
  );
}

List.propTypes = {
  items: arrayOf(object).isRequired,
  buttonText: string,
  onClick: func
};

export default List;
