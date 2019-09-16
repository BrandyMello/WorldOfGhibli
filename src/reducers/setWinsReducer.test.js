import { setWinsReducer } from './setWinsReducer';

describe('setWinsReducer', () => {
  it('should return state if the type does not match', () => {
    const expected = 0;
    const result = setWinsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the new state when the type matches "SET_WINS" returning the number of wins', () => {
    const expected = 0;
    const actionObj = {
      type: "SET_WINS",
      wins: 0
    };

    const result = setWinsReducer(undefined, actionObj);

    expect(result).toEqual(expected);
  });
});