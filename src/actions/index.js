export const storeFilms = (films) => ({
  type: 'STORE_FILMS',
  films
});

export const storeCharacters = (characters, characterNames) => ({
  type: 'STORE_CHARACTERS',
  characters,
  characterNames
});

export const setCurrentPlayer = (playerName) => ({
  type: 'SET_CURRENT_PLAYER',
  playerName
});

export const setWins = (numOfWins) => ({
  type: 'SET_WINS',
  numOfWins
})