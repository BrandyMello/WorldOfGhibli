import React from 'react';
import Game from '../Game/Game';
// import { connect } from 'react-redux';
// import { setWins } from '../../actions';
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
// import images from '../../images/images.js';

const GameDisplay = ({characters, player}) => {
  console.log(player)
  const characterNames = characters.map(character => character.name);//may not need because in reducer
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
