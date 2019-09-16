import React from 'react';
import Film from './Film';
import { shallow } from 'enzyme';

describe('Film', () => {

  it('should take a snapshot', () => {
    const wrapper = shallow(
      <Film
        key={12}
        title='Movie'
        description='Good'
        photo='imag.png'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});