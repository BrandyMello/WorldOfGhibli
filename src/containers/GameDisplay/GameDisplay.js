import React from 'react';
import Game from '../Game/Game';
import images from '../../images/images.js';

const GameDisplay = ({characters}) => {
  const mappedGames = characters.map((character, index) => {
    return <Game
      key={character.id}
      title={character.name}
      gender={character.gender}
      age={character.age}
      eyeColor={character.eye_color}
      hairColor={character.hair_color}
    />
  })

  return (
    <div>
      {mappedGames}
    </div>
  )
}

export default GameDisplay
