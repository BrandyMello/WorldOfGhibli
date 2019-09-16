export const setWinsReducer = (state=0, action) => {
  switch(action.type) {
    case 'SET_WINS':
      return action.wins;
    default:
      return state;
  }
}