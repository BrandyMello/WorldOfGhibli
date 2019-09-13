import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.scss';
import FilmsDisplay from './containers/FilmsDisplay/FilmsDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: []
    }
  }

  componentDidMount = () => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => response.json())
      .then(films => this.setState({ films: films }))
      .catch(err => console.error(err));

  }

  render() {
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
        <Route exact path='/' render={() => <FilmsDisplay films={this.state.films}/>} />
        <footer></footer>
      </main>
    )
  }
}

export default App;


