import { combineReducers } from 'redux';
import { setCurrentPlayerReducer } from './setCurrentPlayerReducer';
import { setWinsReducer } from './setWinsReducer';
import { storeCharactersReducer } from './storeCharactersReducer';
import { storeFilmsReducer } from './storeFilmsReducer';
import { setCharNames } from './setCharNamesReducer';

const rootReducer = combineReducers({
  player: setCurrentPlayerReducer, 
  wins: setWinsReducer, 
  characters: storeCharactersReducer,
  characterNames: setCharNames, 
  films: storeFilmsReducer
});

export default rootReducer;