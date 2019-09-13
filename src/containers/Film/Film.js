import React from 'react';
import './Film.scss';

const Film = ({ title, description, photo }) => {

  return (
      <article>
        <h2>{title}</h2>
        <img src={photo} className='movie-image'></img>
        <p>{description}</p>
      </article>

  )
}

export default Film
