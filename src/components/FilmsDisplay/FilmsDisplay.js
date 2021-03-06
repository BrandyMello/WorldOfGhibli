import React from 'react';
import images from '../../images/images.js';
import Film from '../Film/Film';
import './FilmsDisplay.scss';
import PropTypes from 'prop-types';

const FilmsDisplay = ({ films }) => {
  const mappedFilms = films.map((film, index) => {
    return <Film
      key={film.id}
      title={film.title}
      description={film.description}
      photo={images[`film${index}`][1]}
    />
  })

  return (
    <div className="movie-container">
      {mappedFilms}
    </div>
  )
}

export default FilmsDisplay;

FilmsDisplay.propTypes = {
  films: PropTypes.array.isRequired
}