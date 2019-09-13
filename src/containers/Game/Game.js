import React from 'react';
import './Game.scss';

const Game = ({ title, description, photo }) => {
  return (
    <main className="game-background-img">
      <h2>{title}</h2>
      <img src={photo} className='movie-image'></img>
      <p>{description}</p>
    </main>
  )
}

export default Game
