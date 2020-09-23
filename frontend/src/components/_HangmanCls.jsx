import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { graphql } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import man0 from "./images/man0.png";
import man1 from "./images/man1.png";
import man2 from "./images/man2.png";
import man3 from "./images/man3.png";
import man4 from "./images/man4.png";
import man5 from "./images/man5.png";
import man6 from "./images/man6.png";

const getWords = gql`
  query {
    words {
      id
      text
    }
  }
`

class Hangman extends Component {
  static defaultProps = {
    images: [man0, man1, man2, man3, man4, man5, man6],
  }

  constructor(props){
    super(props);
    this.state = {
      word: '',
      toGuess: [],
      clicked: [],
      tries: 0,
      status: 'waiting' //status - waiting, playing, win, lose
    }
  }

  keyboard = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return letters.split('').map(item => (
      <button disabled={this.state.clicked.includes(item)} className="letters"
              onClick={this.handleClick} key={item} value={item}>{item}
      </button>
    ))
  }

  handleClick = e => {
    let { word, toGuess, clicked, tries, status } = this.state
    const value = e.target.value

    //track button clicked and left tries
    if (status === 'waiting')
      clicked = []
    else
      clicked.push(value)

    if (word.includes(value)){
      for (let i in word) {
        if (word[i] === value) { toGuess[i] = value }
      }
    } else {
      tries = tries - 1
    }

    // when game is over and player wins
    if (toGuess.length > 0 && word === toGuess.join('')) {
      status = 'win'
      clicked = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    }

    // when game is over and player loses
    if (tries === 0 && status === 'playing') {
      status = 'lose'
      clicked = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    }

    this.setState((state) => ({
      toGuess: toGuess,
      clicked: clicked,
      tries: state.tries = state.tries === 0 ? 0 : tries,
      status: status
    }))
  }

  newGame = () => {
    const words = this.props.data.words.map(item => item.text)
    const idx = Math.floor(Math.random() * (words.length))
    const word = words[idx].toUpperCase()
    const toGuess = word.split('').map(item => item = '_')

    this.setState((state) => ({
      word: word,
      toGuess: toGuess,
      clicked: [],
      tries: 6,
      status: 'playing',
    }))
  }

  render() {
    if (this.props.data.loading) {
      return <div className="loading"><CircularProgress /></div>
    } else {
      let playing = {"display": 'none'}
      let result = {"display": 'none'}

      if (this.state.status === 'win' || this.state.status === 'lose') {
        result = {"display": ''}
        playing = {"display": ''}
      } else if (this.state.status === 'playing'){
        playing = {"display": ''}
      }

      return (
        <div className="container">
          <div className="left-pane"><img src={this.props.images[this.state.tries]} alt="Hangman"/></div>
          <div className="right-pane">
            <div id="game">
              <p id="result" style={result}>{this.state.status === 'win' ? 'You Win!!' : 'Game Over!!'}</p>
              <p style={playing} id="guess">{this.state.toGuess}</p>
              <div>
                <span style={playing} id="tries">Left tries: <span style={{color: '#FF6673'}}>
                  {this.state.tries}</span> </span>
                <span id="answer" style={result}>The answer is: {this.state.word}</span>
              </div>
            </div>
            <div id="keyboard">{this.keyboard()}</div>
            <button id="start" onClick={this.newGame}>NEW GAME</button>
          </div>
        </div>
      )
    }
  }
}

export default graphql(getWords)(Hangman);
