import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import VehiclesPanel from '../../client/components/VehiclesPanel';

describe('(Component) VehiclesPanel', () => {
  it('should render self and subcomponents', () => {
    const item = {
      id: 1,
      type: 'string',
      brand: 'string',
      img: 'string'
    };
    const selectedItems = [item];

    const wrapper = shallow(
      <VehiclesPanel title="title" selectedItems={selectedItems} />
    );

    const listProps = wrapper.find('List').props();
    expect(listProps.items).to.eql(selectedItems);
    expect(wrapper).to.have.length(1);
  });

  it('should contain a header with title when passed in', () => {
    const selectedItems = [{}];
    const wrapper = shallow(
      <VehiclesPanel title="title" selectedItems={selectedItems} />
    );
    expect(wrapper.contains(<h2>title</h2>)).to.equal(true);
  });
});
