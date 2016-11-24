import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Loader from '../../client/components/Header';

describe('(Component) Loader', () => {
  it('renders without exploding', () => {
    expect(shallow(<Loader />)).to.have.length(1);
  });
});
