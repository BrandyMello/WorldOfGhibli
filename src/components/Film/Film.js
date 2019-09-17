import React from 'react';
import './Film.scss';
import PropTypes from 'prop-types';

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

Film.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photo: PropTypes.string
}
