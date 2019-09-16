import React from 'react';
import { shallow } from 'enzyme';
import { getFilms, getCharacters } from './apiCalls';

describe('getCharacters', () => {

  beforeEach(() => {
    let mockCharacters;
    mockCharacters = [
      {
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
      },
      {
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
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCharacters)
      });
    });
  });

    it('should return the correct url', () => {
      getCharacters();
      expect(window.fetch).toHaveBeenCalledWith('https://ghibliapi.herokuapp.com/people/');
    });

    it('should return an array of characters', () => {
      getCharacters()
      .then(results => expect(results).toEqual(mockCharacters))
    });

    it('should return an error if it does not fetch the characters', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })  
      });

      expect(getCharacters()).rejects.toEqual(Error('Error fetching characters'));
    });
});

describe('getFilms', () => {

  beforeEach(() => {
    let mockFilms;
    mockFilms = [{
      id: "2b",
      title: "Castle in the Sky",
      description: "The orphan Sheeta inherited a mysterious...",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      rt_score: "95",
      people: [
        "https://ghibliapi.herokuapp.com/people/"
      ]
    },
      {
        id: "2b",
        title: "Castle in the Sky",
        description: "The orphan Sheeta inherited a mysterious...",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
        rt_score: "95",
        people: [
          "https://ghibliapi.herokuapp.com/people/"
        ]
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(mockFilms)
      });
    });
  });
  
    it('should return the correct url', () => {
      getFilms();
      expect(window.fetch).toHaveBeenCalledWith('https://ghibliapi.herokuapp.com/films/')
    });

    it('should return an array of films', () => {
      getFilms()
      .then(results => expect(results).toEqual(mockFilms));
    });

    it('should return an error if it does not get the correct url', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });

      expect(getFilms()).rejects.toEqual(Error('Error fetching films'));
    });
  
});