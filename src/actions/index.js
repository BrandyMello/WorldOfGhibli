export const storeFilms = (films) => ({
  type: 'STORE_FILMS',
  films
});

export const storeCharacters = (characters) => ({
  type: 'STORE_CHARACTERS',
  characters
});

export const storeCharNames = (characters) => ({
  type: 'STORE_CHAR_NAMES',
  characters
});

export const setCurrentPlayer = (playerName) => ({
  type: 'SET_CURRENT_PLAYER',
  playerName
});

export const setWins = (numOfWins) => ({
  type: 'SET_WINS',
  numOfWins
})