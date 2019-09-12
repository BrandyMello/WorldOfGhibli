import React, { Component } from 'react';
// import './images/backgrounds';
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
          <button>HOME</button>
          <form className="enter-game">
            <input placeholder="player's name: "></input>
            <button>PLAY GAME</button>
          </form>
          <h1>World of Ghibli</h1>  
        </nav>
          <FilmsDisplay films={this.state.films} />
        <footer></footer>
      </main>
    )
  }
}

export default App;


