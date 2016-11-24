import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ErrorPanel from '../../client/components/ErrorPanel';

describe('(Component) ErrorPanel', () => {
  it('renders without exploding', () => {
    expect(shallow(<ErrorPanel />)).to.have.length(1);
  });
  it('should render message when passed in', () => {
    const wrapper = shallow(
      <ErrorPanel errorMessage="error" />
    );
    expect(wrapper.contains('error Please reload the page.')).to.equal(true);
  });
  it('should render default message when nothing passed in', () => {
    const wrapper = shallow(<ErrorPanel />);
    expect(wrapper.contains('Please reload the page.')).to.equal(true);
  });
});
