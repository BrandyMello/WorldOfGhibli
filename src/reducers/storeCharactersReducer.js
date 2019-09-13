export const storeCharactersReducer = (state=[], action) => {
  switch(action.type) {
    case 'STORE_CHARACTERS':
      return action.characters;
    case 'STORE_CHAR_NAMES':
      const characterNames = action.characters.map(character => character.name);
      return characterNames;
    default:
      return state;
  }  
}