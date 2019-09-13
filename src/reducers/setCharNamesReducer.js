
export const setCharNames = (state=[], action) => {
switch(action.type) {
  case 'STORE_CHAR_NAMES':
    const characterNames = action.characters.map(character => character.name);
    return characterNames;
  default:
    return state;
  }
}