import React from 'react';
import './Game.scss';

const Game = ({ name, gender, age, eyeColor, hairColor }) => {
  return (
    <main className="game-background-img">
      <h2>{name}</h2>
      {/* <img src={photo} className='movie-image'></img> */}
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Hair Color: {hairColor}</p>
    </main>
  )
}

export default Game
