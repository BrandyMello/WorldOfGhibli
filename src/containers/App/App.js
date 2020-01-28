import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { getFilms, getCharacters } from '../../Fetch/apiCalls.js';
import GameDisplay from '../../components/GameDisplay/GameDisplay';
import './App.scss';
import FilmsDisplay from '../../components/FilmsDisplay/FilmsDisplay';
import { connect } from 'react-redux';
import { storeFilms, storeCharacters, storeCharNames, setCurrentPlayer } from '../../actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io';

export class App extends Component {
  constructor() {
    super();
    this.state={
      player: ''
    }
  }

  handlePlayerInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  declarePlayer = (e) => {
    e.preventDefault();
    this.props.setCurrentPlayer(this.state.player);
    this.clearInput();
  }

  clearInput = () => {
    this.setState({player: ''})
  }

  componentDidMount = () => {
    getFilms()
      .then(films => this.props.storeFilms(films))
      .catch(err => console.error(err));
    
    getCharacters()
      .then(characters => this.props.storeCharacters(characters))
      .catch(err => console.error(err));

    getCharacters()
      .then(characters => this.props.storeCharNames(characters))
      .catch(err => console.error(err));
  }
    
  render() {
    return (
      <main>
        <nav className="nav">
          <NavLink to="/" className="home-nav">
            <button class="btn_home">HOME</button>
          </NavLink>
          <form className="enter-game">
            <input class="input"
              placeholder="player's name: "
              name="player"
              value={this.state.player}
              onChange={this.handlePlayerInput}
            ></input>
            <NavLink to="/" onClick={this.declarePlayer}>
              <NavLink to="/game" className="game-nav">
                <button disabled={!this.state.player} class="btn_play">
                  PLAY GAME
                </button>
              </NavLink>
            </NavLink>
          </form>
          <h1>World of Ghibli</h1>
        </nav>
        <Route
          exact
          path="/"
          render={() => (
            <section class="section_films_display">
              <FilmsDisplay films={this.props.films} />
              <IoIosArrowForward class="arrow"/>
            </section>
          )}
        />
        <Route
          exact
          path="/game"
          render={() => (
            <section class="section_game_display">
              <GameDisplay
                characters={this.props.characters}
                player={this.props.player}
              />
            </section>
          )}
        />
        <footer></footer>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  films: state.films,
  characters: state.characters,
  characterNames: state.characterNames,
  player: [state.player]
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ storeFilms, storeCharacters, storeCharNames, setCurrentPlayer }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  films: PropTypes.array.isRequired,
  characters: PropTypes.array.isRequired,
  characterNames: PropTypes.array.isRequired,
  player: PropTypes.array,
  storeFilms: PropTypes.func.isRequired,
  storeCharacters: PropTypes.func.isRequired,
  storeCharNames: PropTypes.func.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired
}
