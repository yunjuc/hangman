import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Hangman from '../components/Hangman'

describe('Hangman component', () => {
  const words = [
    {id: 1, text:'hello'},
    {id: 2, text: 'world'}
  ]

  it('Hangman compnent is rendered', () => {
    const { container } = render(<Hangman words={words} />)

    expect(container).toMatchSnapshot()
  })

  it('Keyboard is presented', () => {
    const { container } = render(<Hangman words={words} />)
    const keys = screen.getAllByTestId('keys')

    expect(keys).toHaveLength(26);
  })

  it('new game button is presented', () => {
    const { container } = render(<Hangman words={words} />)
    
    expect(container).toHaveTextContent('NEW GAME')
  })

  it('game starts when button clicked', () => {
    const { container } = render(<Hangman words={words} />)

    const firstTry = container.querySelector('#tries')
    expect(firstTry).toHaveTextContent('Left tries: 0')

    fireEvent.click(screen.getByText('NEW GAME'))

    const secondTry = container.querySelector('#tries')
    expect(secondTry).toHaveTextContent('Left tries: 6')
  })
})
