import { setCurrentPlayerReducer } from './setCurrentPlayerReducer';

describe('setCurrentPlayerReducer', () => {
  it('should return the state if the type does not match', () => {
    const expected = [];
    const result = setCurrentPlayerReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the new state when the type matches "SET_CURRENT_PLAYER" with the new player assigned', () => {
    const expected = 'Brandy';
    const actionObj = {
      type: 'SET_CURRENT_PLAYER',
      player: 'Brandy'
    };

    const result = setCurrentPlayerReducer(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});