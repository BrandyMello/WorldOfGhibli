import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import * as apiCalls from './Fetch/apiCalls.js';
import GameDisplay from './containers/GameDisplay/GameDisplay';
import './App.scss';
import FilmsDisplay from './containers/FilmsDisplay/FilmsDisplay';
import { connect } from 'react-redux';
import { storeFilms, storeCharacters, storeCharNames } from './actions';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    apiCalls.getFilms()
      .then(films => this.props.storeFilms(films))
      // .then(films => console.log(films))
      .catch(err => console.error(err));
    
    apiCalls.getCharacters()
      .then(characters => this.props.storeCharacters(characters))
      .catch(err => console.error(err));

      

    apiCalls.getCharacters()
      .then(characters => this.props.storeCharNames(characters))
      .catch(err => console.error(err));
  }
    
  
    

  render() {
    // console.log(this.props)
    return (
      <main>
        <nav className="nav">
          <NavLink to='/' className="home-nav"><button>HOME</button></NavLink>
          <form className="enter-game">
            <input placeholder="player's name: "></input>
            <NavLink to='/game' className='game-nav'><button>PLAY GAME</button></NavLink>
          </form>
          <h1>World of Ghibli</h1>  
        </nav>
        <Route exact path='/' render={() => <FilmsDisplay films={this.props.films}/>} />
        <Route exact path='/game' render={() => <GameDisplay characters={this.props.characters} />} /> 
        <footer></footer>
      </main> 
    )
  }
}

export const mapStateToProps = state => ({
  films: state.films,
  characters: state.characters,
  characterNames: state.characterNames
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ storeFilms, storeCharacters, storeCharNames }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);


