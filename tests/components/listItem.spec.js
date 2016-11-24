import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ListItem from '../../client/components/List/ListItem.js';

describe('(Component) ListItem', () => {
  it('renders without exploding', () => {
    const item = {
      id: 1,
      type: 'string',
      brand: 'string',
      img: 'string'
    };

    expect(shallow(<ListItem item={item} />)).to.have.length(1);
  });
});
