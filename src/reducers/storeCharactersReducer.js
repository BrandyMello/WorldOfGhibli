export const storeCharactersReducer = (state=[], action) => {
  switch(action.type) {
    case 'STORE_CHARACTERS':
      return action.characters;
    default:
      return state;
  }  
}