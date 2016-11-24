import React, { PropTypes } from 'react';
import Button from 'components/Button';

import './style.css';

const { number, string, shape, func } = PropTypes;

function ListItem({ item, onClick, buttonText }) {
  const handleClick = () => {
    onClick(item.id);
  };

  return (
    <li className="list-item">
      <div className="list-item-image-wrapper">
        <img
          className="list-item-image"
          src={item.img}
          alt={item.type}
        />
      </div>
      <strong className="list-item-title">{item.brand}</strong>
      <Button
        className="right"
        title={buttonText}
        type="button"
        onClick={handleClick}
      />
    </li>
  );
}

ListItem.propTypes = {
  item: shape({
    id: number,
    type: string,
    brand: string,
    img: string
  }).isRequired,
  buttonText: string,
  onClick: func
};

export default ListItem;
