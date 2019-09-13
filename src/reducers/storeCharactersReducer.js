export const storeCharactersReducer = (state=[], action) => {
  switch(action.type) {
    case 'STORE_CHARACTERS':
      return action.characters;
    case 'STORE_CHAR_NAMES':
      return action.characterNames;
    default:
      return state;
  }  
}