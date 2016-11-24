/* jshint esnext: true */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Select from '../../client/components/Select';

describe('(Component) Select', () => {
  it('renders without exploding', () => {
    expect(shallow(<Select />)).to.have.length(1);
  });

  it('render select with option', () => {
    const items = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
    ];

    const wrapper = shallow(<Select items={items} />);

    expect(wrapper.find('select').find('option')).to.have.length(2);
  });

  it('simulates change event', () => {
    const handleChange = spy();
    const wrapper = shallow(<Select onChange={handleChange} />);

    wrapper.find('select').simulate('change', {
      target: { value: 'test value' }
    });

    expect(handleChange.calledOnce).to.equal(true);
  });

  it('when passing a value, select should update its value', () => {
    const items = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' },
    ];

    const wrapper = shallow(<Select items={items} />);

    expect(wrapper.find('select').props().value).to.equal('');
    wrapper.setProps({ value: 'two' });
    expect(wrapper.find('select').props().value).to.equal('two');
  });
});
