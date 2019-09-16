export const setGuessReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_GUESS':
      return [action.guess];
      default:
        return state;
  }
}