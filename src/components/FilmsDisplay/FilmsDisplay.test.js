import React from 'react';
import FilmsDisplay from './FilmsDisplay';
import { shallow } from 'enzyme';

describe('FilmsDisplay', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <FilmsDisplay 
      films={[{id: 1, name: 'Movie1'}, {id: 2, name: 'Movie2'}]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});