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

export const setCurrentPlayer = (player) => ({
  type: 'SET_CURRENT_PLAYER',
  player
});

export const setWins = (wins) => ({
  type: 'SET_WINS',
  wins
})

export const setGuess = (guess) => ({
  type: 'SET_GUESS',
  guess
})