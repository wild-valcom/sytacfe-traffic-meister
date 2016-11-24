import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import List from '../../client/components/List/List.js';

describe('(Component) List', () => {
  it('should render self and subcomponents', () => {
    const item = {
      id: 1,
      type: 'string',
      brand: 'string',
      img: 'string'
    };
    const items = [item];
    const wrapper = shallow(<List items={items} />);

    const listItemProps = wrapper.find('ListItem').props();
    expect(listItemProps.item).to.eql(item);
    expect(wrapper).to.have.length(1);
  });
});
