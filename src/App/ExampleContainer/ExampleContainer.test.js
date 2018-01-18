import React from 'react';
import ExampleContainer from './ExampleContainer';

describe('ExampleContainer', () => {
  it('render()', () => {
    const wrapper = shallow(<ExampleContainer />).dive();
    expect(wrapper).to.have.className('example-container');
  });
});