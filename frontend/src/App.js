import React from 'react';
import Hangman from './components/Hangman';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://localhost:8888/graphql/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 className="title">Hangman</h1>
        <Hangman />
      </div>
    </ApolloProvider>
  )
}

export default App
