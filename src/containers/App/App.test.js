import React from 'react';
import ReactDOM from 'react-dom';
import {App, mapStateToProps, mapDispatchToProps} from './App';
import { shallow } from 'enzyme';
import { getFilms, getCharacters } from '../../Fetch/apiCalls';
import { storeFilms, storeCharacters, storeCharNames, setCurrentPlayer } from '../../actions';

jest.mock('../../Fetch/apiCalls');

const mockFilm = {
  id: "2b",
  title: "Castle in the Sky",
  description: "The orphan Sheeta inherited a mysterious...",
  director: "Hayao Miyazaki",
  producer: "Isao Takahata",
  release_date: "1986",
  rt_score: "95",
  people: [
    "https://ghibliapi.herokuapp.com/people/"
  ],
  species: [
    "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
  ],
  locations: [
    "https://ghibliapi.herokuapp.com/locations/"
  ],
  vehicles: [
    "https://ghibliapi.herokuapp.com/vehicles/"
  ],
  url: "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
}

const mockCharacter = {
  id: "ba9",
  name: "Ashitaka",
  gender: "Male",
  age: "late teens",
  eye_color: "Brown",
  hair_color: "Brown",
  films: [
    "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
  ],
  species: "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
  url: "https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0"
}

getFilms.mockImplementation(() => {
    return Promise.resolve({
      films: [mockFilm, mockFilm]
    })
  });

  getCharacters.mockImplementation(() => {
    return Promise.resolve({
      characters: [mockCharacter, mockCharacter]
    })
  });

describe('App', () => {
  let wrapper;
  const storeFilmsMock = jest.fn();
  const storeCharactersMock = jest.fn();
  const storeCharNamesMock = jest.fn();
  const setCurrentPlayerMock = jest.fn();
  const mockFilms = [mockFilm, mockFilm];
  const mockCharacters = [mockCharacter, mockCharacter];
  const mockCharacterNames = ['Brandy', 'Fred']
  const mockPlayer = 'Brandy'
  beforeEach(() => {
    wrapper = shallow(<App 
      films={mockFilms}
      characters={mockCharacters}
      characterNames={mockCharacterNames}
      player={mockPlayer}
      storeFilms={storeFilmsMock}
      storeCharacters={storeCharactersMock}
      storeCharNames={storeCharNamesMock}
      setCurrentPlayer={setCurrentPlayerMock}
      getFilms={jest.fn()}
      getCharacters={jest.fn()}
    />)
  });

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
