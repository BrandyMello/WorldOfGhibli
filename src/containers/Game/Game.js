import React, { Component } from 'react';
import './Game.scss';
import { connect } from 'react-redux';
import { setWins, setGuess } from '../../actions';
import { bindActionCreators } from 'redux';
import images from '../../images/images';
import PropTypes from 'prop-types';

export class Game extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
      // wins: this.props.wins,
      winningGif: '',
      isWinner: false,
      correct: true
    }
  }
 randomizeName = (name) => {
    var randomSort = (a, b) => {
      return Math.random() > .5 ? -1 : 1;
    }
    return name.split('').sort(randomSort).join('').toLowerCase();
  }

  handleGuess = (e) => {
    const guess = e.target.value;
    this.setState({ guess });
  }

  submitGuess = (e, name) => {
    e.preventDefault();
    this.props.setGuess(this.state.guess);
    this.checkGuess(this.state.guess, name);
  }

  checkGuess = (guess, name, index) => {
    console.log(guess, name)
    if (guess.toLowerCase() === name.toLowerCase()) {
      // console.log('you won!')
      // this.state.wins += 1;
      // this.props.setWins(this.state.wins);
      this.setState({winningGif: images[`film${this.props.index}`][2]});
      this.setState({isWinner: true});
      this.setState({ correct: true });
    } else {
      this.setState({correct: false});
      console.log('try again')
    }
  }

  render() {
    const { index, name, gender, age, eyeColor, hairColor, characterNames, player, wins, guess } = this.props;

    const btnClass = this.state.correct ? 'submit-guess' : 'submit-guess wrong-guess'

  return (
    <main className="game-background-img whole-game">
      <article className="ea-game">
        {this.state.isWinner && <img src={this.state.winningGif} alt='victory gif' className="victory-gif"></img> ||
        <div className='clue-div'>
          <h2>{this.randomizeName(name)}</h2>
          <p className="clues">CLUES:</p>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Eye Color: {eyeColor}</p>
          <p>Hair Color: {hairColor}</p>
        </div>}
        <form className="guess-form" onSubmit={(e) => this.submitGuess(e, name, index)}>
          <input className="guess-input" name="guess" placeholder="type guess here..." onChange={this.handleGuess}></input>
          <button className={btnClass}>X</button>
          
        </form>
      </article>
    </main>
  )}
}

export const mapStateToProps = state => ({
  wins: state.wins,
  guess: state.guess
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setWins, setGuess }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);

Game.propTypes = {
  wins: PropTypes.number,
  guess: PropTypes.array,
  setWins: PropTypes.func.isRequired,
  setGuess: PropTypes.func.isRequired
}