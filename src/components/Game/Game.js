import React from 'react';
import './Game.scss';

const randomizeName = (name) => {
  console.log(name)
  var randomSort = (a, b) => {
    return Math.random() > .5 ? -1 : 1;
  }
  return name.name.split('').sort(randomSort).join('');
}

const Game = ({ name, gender, age, eyeColor, hairColor, characterNames, player }) => {
  
  return (
    <main className="game-background-img whole-game">
      <article className="ea-game">
        <h2>{randomizeName({name})}</h2>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Hair Color: {hairColor}</p>
      </article>
    </main>
  )
}

export default Game
