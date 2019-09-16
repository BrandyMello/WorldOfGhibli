import React from 'react';
import GameDisplay from './GameDisplay';
import { shallow } from 'enzyme';

describe('GameDisplay', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <GameDisplay
        characters={
          [
            {
              id: 1,
              name: 'Eboshi'
            },
            {
              id: 2,
              name: 'Ashikata'
            }
          ]
        }
        player='Brandy'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
