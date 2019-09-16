import { setGuessReducer } from './setGuessReducer';

describe('setGuessReducer', () => {
  it('should return the state if the type does not match', () => {
    const expected = [];
    const result = setGuessReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return a guess if the type "SET_GUESS" matches', () => {
    const expected = ['Eboshi'];
    const actionObj = {
      type: 'SET_GUESS',
      guess: 'Eboshi'
    };

    const result = setGuessReducer(undefined, actionObj);

    expect(result).toEqual(expected);
  })
});