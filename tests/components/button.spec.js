import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Button from '../../client/components/Button';

describe('(Component) Button', () => {
  it('renders without exploding', () => {
    expect(shallow(<Button />)).to.have.length(1);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(<Button title="foo" />);
    expect(wrapper.contains('foo')).to.equal(true);
  });

  it('should contain a `.class-modifier` class when passed in', () => {
    const wrapper = shallow(<Button className="class-modifier" />);

    expect(wrapper.hasClass('class-modifier')).to.equal(true);
  });

  it('allows us to set props', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.props().type).to.equal('button');
    wrapper.setProps({ type: 'submit' });
    expect(wrapper.props().type).to.equal('submit');
  });

  it('simulates click events', () => {
    const handleClick = spy();
    const wrapper = shallow(
      <Button onClick={handleClick} />
    );

    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true);
  });
});
