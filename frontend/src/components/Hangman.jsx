import React, { useState } from 'react';
import { createApolloFetch } from 'apollo-fetch';
import man0 from "./images/man0.png";
import man1 from "./images/man1.png";
import man2 from "./images/man2.png";
import man3 from "./images/man3.png";
import man4 from "./images/man4.png";
import man5 from "./images/man5.png";
import man6 from "./images/man6.png";

const uri = 'https://localhost:8888/graphql/'
const apolloFetch = createApolloFetch({ uri })
const wordbank = []
const query = `
  query {
    words {
      id
      text
    }
  }
`
apolloFetch({ query })
  .then(result => {
    const { data } = result
    data.words.map(el => wordbank.push(el.text))
  })
  .catch(err => console.log(err))

function Hangman() {
  const images = [man0, man1, man2, man3, man4, man5, man6]
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState([])
  const [clicked, setClicked] = useState([])
  const [tries, setTries] = useState(0)
  const [status, setStatus] = useState('waiting')

  const keyboard = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return letters.split('').map(item => (
      <button disabled={clicked.includes(item)} className="letters"
              onClick={handleClick} key={item} value={item}>{item}
      </button>
    ))
  }

  const newGame = () => {
    const idx = Math.floor(Math.random() * (wordbank.length))
    const newWord = wordbank[idx].toUpperCase()
    const newGuess = newWord.split('').map(item => item = '_')
    setWord(newWord)
    setGuess(newGuess)
    setTries(6)
    setClicked([])
    setStatus('playing')
  }

  const handleClick = e => {
    if (status === 'playing') {
      const value = e.target.value
      setClicked([...clicked, value])

      if (word.includes(value)) {
        let guessing = [...guess]
        for (let i in word) {
          if (word[i] === value) {
            guessing[i] = value
          }
        }
        setGuess(guessing)
        if (word === guessing.join('')) {
          setStatus('win')
          setClicked("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''))
        }
      }

      if (!word.includes(value)) {
        if (tries === 1) {
          setTries(0)
          setStatus('lose')
          setClicked("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''))
        } else {
          setTries(tries - 1)
        }
      }
    }
  }

  //set block hide/display value based on status
  let playing = {"display": 'none'}
  let result = {"display": 'none'}
  if (status === 'win' || status === 'lose') {
    result = {"display": ''}
    playing = {"display": ''}
  } else if (status === 'playing'){
    playing = {"display": ''}
  }

  return (
    <div className="container">
      <div className="left-pane"><img src={images[tries]} alt="Hangman"/></div>
      <div className="right-pane">
        <div id="game">
          <p id="result" style={result}>{status === 'win' ? 'You Win!!' : 'Game Over!!'}</p>
          <p style={playing} id="guess">{guess}</p>
          <div>
            <span style={playing} id="tries">Left tries: <span style={{color: '#FF6673'}}>
              {tries}</span> </span>
            <span id="answer" style={result}>The answer is: {word}</span>
          </div>
        </div>
        <div id="keyboard">{keyboard()}</div>
        <button id="start" onClick={newGame}>NEW GAME</button>
      </div>
    </div>
  )
}

export default Hangman;
