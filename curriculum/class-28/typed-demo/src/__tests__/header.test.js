import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Header from '../components/header';

describe('Testing our Header', () => {
  let header = mount(<Header title="test" />);

  it('Our header render our title', () => {
    expect(header.props().title).toBe('test');
  });
});