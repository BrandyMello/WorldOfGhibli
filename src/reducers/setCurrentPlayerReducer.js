export const setCurrentPlayerReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_CURRENT_PLAYER':
      return action.player;
    default:
      return state;
  }
};