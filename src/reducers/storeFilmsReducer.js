export const storeFilmsReducer = (state=[], action) => {
  switch(action.type) {
    case 'STORE_FILMS':
      return action.films;
    default:
      return state;
  }  
}