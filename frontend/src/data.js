import { createApolloFetch } from 'apollo-fetch';

function fetchData() {
  const uri = 'https://localhost:8888/graphql/'
  const apolloFetch = createApolloFetch({ uri })
  const words = []
  const query = `
    query {
      words {
        id
        text
      }
    }
  `
  return apolloFetch({ query })
    .then(result => {
      const { data } = result
      data.words.map(el => words.push(el.text))
      return words
    })
    .catch(err => console.log(err))
}

export default fetchData
