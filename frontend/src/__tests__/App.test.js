import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('App compnent is rendered', () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })

  it('title is presented', () => {
    const { container } = render(<App />)
    const title = container.querySelector('h1')

    expect(title).toHaveTextContent('Hangman')
  })
})
