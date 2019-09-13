import { combineReducers } from 'redux';
import { setCurrentPlayerReducer } from './setCurrentPlayerReducer';
import { setWinsReducer } from './setWinsReducer';
import { storeCharactersReducer } from './storeCharactersReducer';
import { storeFilmsReducer } from './storeFilmsReducer'; 

export const rootReducer = combineReducers({
  player: setCurrentPlayerReducer, 
  wins: setWinsReducer, 
  characters: storeCharactersReducer, 
  films: storeFilmsReducer
})
//May need to break out characters reducer into two