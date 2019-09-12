// import images from '../../images/images.js';
import React from 'react';
import './Film.scss';

const Film = ({ title, description, photo }) => {

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={photo} className='movie-image'></img>
    </div>
  )
}

export default Film
