import React, {useState, useEffect} from 'react';
import Hangman from './components/Hangman';
import { createApolloFetch } from 'apollo-fetch';

const uri = 'https://localhost:8888/graphql/'
const apolloFetch = createApolloFetch({ uri })
const query = `
  query {
    words {
      id
      text
    }
  }
`

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    apolloFetch({ query })
      .then(res => {
        const words = []
        res.data.words.map(el => words.push(el.text))
        setData(words)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 className="title">Hangman</h1>
      <Hangman data={data}/>
    </div>
  )
}

export default App
