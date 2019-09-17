import React from 'react';
import Game from '../../containers/Game/Game';
import PropTypes from 'prop-types';

const GameDisplay = ({characters, player}) => {
  const characterNames = characters.map(character => character.name);

  const mappedGames = characters.map((character, index) => {
    return <Game
      index={index}
      key={character.id}
      name={character.name}
      gender={character.gender}
      age={character.age}
      eyeColor={character.eye_color}
      hairColor={character.hair_color}
      characterNames={characterNames}
      player={player}
    />
  })

  return (
    <div className="background">
      <h2>Unscramble the character name for a win, {player}</h2>
      {mappedGames}
    </div>
  )
}

export default GameDisplay

GameDisplay.propTypes = {
  characters: PropTypes.array.isRequired,
  player: PropTypes.string
}