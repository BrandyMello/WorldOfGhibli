import { storeFilms, storeCharacters, storeCharNames, setCurrentPlayer } from './index';

describe('actions', () => {
  it('should have a type of "STORE_FILMS"', () => {
    const films = [{ film1: 'stuff' }, { film2: 'stuff' }]
    const expectedAction = {
      type: 'STORE_FILMS',
      films: films
    }
    const result = storeFilms(films);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "STORE_CHARACTERS"', () => {
    const characters = [{ character1: 'stuff' }, { character2: 'stuff' }]
    const expectedAction = {
      type: 'STORE_CHARACTERS',
      characters: characters
    }
    const result = storeCharacters(characters);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "STORE_CHAR_NAMES"', () => {
    const characters = [{ character1: 'stuff' }, { character2: 'stuff' }]
    const expectedAction = {
      type: 'STORE_CHAR_NAMES',
      characters: characters
    }
    const result = storeCharNames(characters);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of "SET_CURRENT_PLAYER"', () => {
    const player = ['Brandy']
    const expectedAction = {
      type: 'SET_CURRENT_PLAYER',
      player: player
    }
    const result = setCurrentPlayer(player);
    expect(result).toEqual(expectedAction);
  });
});
