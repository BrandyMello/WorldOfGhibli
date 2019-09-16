import React from 'react';
import { Game, mapStateToProps, mapDispatchToProps } from './Game';
import { shallow } from 'enzyme';
import { setWins, setGuess } from '../../actions';

describe('Game', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Game
        index={3}
        key={234}
        name='Eboshi'
        gender='Male'
        age={14}
        eyeColor='brown'
        hairColor='black'
        characterNames={['char1', 'char2']}
        player='Brandy'
        setWins={jest.fn()}
        setGuess={jest.fn()}
      />
    )
  });

  it('should match the snapshot with the data passed through', () => {
    wrapper.randomizeName = jest.fn();
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('mapStateToProps should get the props', () => {
      const expectedProps = { wins: 0, guess: 'eboshi' }
      const mockState = { wins: 0, guess: 'eboshi' };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedProps)
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mappedDispatchedProps = mapDispatchToProps(mockDispatch);

    it('should call dispatch with the setWins action', () => {
      const dispatchSetWinsAction = setWins(0);

      mappedDispatchedProps.setWins(0);

      expect(mockDispatch).toHaveBeenCalledWith(dispatchSetWinsAction);
    });

    it('should call dispatch with the setGuess action', () => {
      const dispatchSetGuessAction = setGuess('eboshi');

      mappedDispatchedProps.setGuess('eboshi');

      expect(mockDispatch).toHaveBeenCalledWith(dispatchSetGuessAction);
    });
  });
});