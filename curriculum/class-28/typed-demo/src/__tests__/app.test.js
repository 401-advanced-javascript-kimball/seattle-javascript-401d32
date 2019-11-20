import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from '../app';

describe('testing our App component', () => {
  it('Can update sate from method', () => {
    const app = mount(<App />);
    const instance = app.instance();
    instance.handleData(3, ['test']);
    expect(app.state('count')).toBe(3);
  })
})