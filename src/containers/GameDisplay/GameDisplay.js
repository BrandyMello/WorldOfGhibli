import React from 'react';
import Game from '../Game/Game';
import images from '../../images/images.js';

const GameDisplay = ({films}) => {
  const mappedGames = films.map((film, index) => {
    return <Game
      key={film.id}
      title={film.title}
      description={film.description}
      photo={images[`film${index}`][3]}
    />
  })

  return (
    <div>
      {mappedGames}
    </div>
  )
}

export default GameDisplay
