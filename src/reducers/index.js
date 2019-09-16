import { combineReducers } from 'redux';
import { setCurrentPlayerReducer } from './setCurrentPlayerReducer';
import { setWinsReducer } from './setWinsReducer';
import { setGuessReducer } from './setGuessReducer'; 
import { storeCharactersReducer } from './storeCharactersReducer';
import { storeFilmsReducer } from './storeFilmsReducer';
import { setCharNames } from './setCharNamesReducer';

const rootReducer = combineReducers({
  player: setCurrentPlayerReducer, 
  wins: setWinsReducer, 
  characters: storeCharactersReducer,
  characterNames: setCharNames, 
  films: storeFilmsReducer,
  guess: setGuessReducer
});

export default rootReducer;