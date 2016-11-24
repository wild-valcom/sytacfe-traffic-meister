import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../client/components/Header';

describe('(Component) Header', () => {
  it('renders without exploding', () => {
    expect(shallow(<Header />)).to.have.length(1);
  });
});
