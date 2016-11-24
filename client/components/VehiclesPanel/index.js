import React, { PropTypes } from 'react';
import Panel from 'components/Panel';
import List from 'components/List';

const { string, arrayOf, object, func } = PropTypes;

function VehiclesPanel({ className, title, selectedItems, handleSelectClick, buttonText }) {
  const header = title ? (<h2>{title}</h2>) : '';

  return selectedItems.length ? (
    <Panel className={className}>
      {header}
      <List
        items={selectedItems}
        onClick={handleSelectClick}
        buttonText={buttonText}
      />
    </Panel>
  ) : false;
}

VehiclesPanel.propTypes = {
  className: string,
  title: string,
  buttonText: string,
  selectedItems: arrayOf(object).isRequired,
  handleSelectClick: func
};

export default VehiclesPanel;
