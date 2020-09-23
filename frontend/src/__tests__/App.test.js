import React from 'react'
import { render, screen, act } from '@testing-library/react'
import App from '../App'
import { gql } from '@apollo/client'
import { MockedProvider } from '@apollo/client/testing'

const query = gql`
  query {
    words {
      id
      text
    }
  }`

const mocks = [
  {
    request: {
      query: query,
    },
    result: {
      data: {
        words: [{id: 1, text: 'hello'}, {id: 2, text: 'world'}],
      },
    },
  }
]

describe('App component', () => {
  it('App compnent is rendered', () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )
    expect(container).toMatchSnapshot()
  })

  it('title is presented', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    )
    await new Promise(resolve => setTimeout(resolve, 0))
    const title = container.querySelector('.title')
    expect(title).toHaveTextContent('Hangman')

  })
})
