import React from 'react'
import Hangman from './components/Hangman'
import { gql, useQuery } from '@apollo/client'
import CircularProgress from '@material-ui/core/CircularProgress'

const getWords = gql`
  query {
    words {
      id
      text
    }
  }`

function App() {
  const { loading, data } = useQuery(getWords)

  if (loading) {
    return <div className="loading"><CircularProgress /></div>
  } else {
    return (
      <div>
        <h1 className="title">Hangman</h1>
        <Hangman words={data.words}/>
      </div>
    )
  }
}

export default App
