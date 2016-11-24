import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Panel from '../../client/components/Panel';

describe('(Component) Panel', () => {
  it('renders without exploding', () => {
    expect(shallow(<Panel />)).to.have.length(1);
  });
  it('should render children when passed in', () => {
    const wrapper = shallow(
      <Panel>
        <div className="unique" />
      </Panel>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('should contain an `.class-modifier` when passed in', () => {
    const wrapper = shallow(
      <Panel className="class-modifier" />
    );
    expect(wrapper.hasClass('class-modifier')).to.equal(true);
  });
});
