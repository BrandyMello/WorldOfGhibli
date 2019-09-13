import React from 'react';
import Game from '../Game/Game';
import images from '../../images/images.js';

const GameDisplay = ({characters}) => {
  const characterNames = characters.map(character => character.name);
  const mappedGames = characters.map((character) => {
    return <Game
      key={character.id}
      name={character.name}
      gender={character.gender}
      age={character.age}
      eyeColor={character.eye_color}
      hairColor={character.hair_color}
      characterNames={characterNames}
    />
  })

  return (
    <div className="background">
      {mappedGames}
    </div>
  )
}

export default GameDisplay
