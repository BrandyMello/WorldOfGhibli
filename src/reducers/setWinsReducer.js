export const setWinsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_WINS':
      return action.numOfWins;
    default:
      return state;
  }
}