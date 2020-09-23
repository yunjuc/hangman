import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Hangman from '../components/Hangman';

describe('Hangman component', () => {
  const data = ['hello', 'world']

  it('Hangman compnent is rendered', () => {
    const { container } = render(<Hangman data={data} />)

    expect(container).toMatchSnapshot()
  })

  it('Keyboard is presented', () => {
    const { container } = render(<Hangman data={data} />)
    const keys = screen.getAllByTestId('keys')

    expect(keys).toHaveLength(26);
  })

  it('new game button is presented', () => {
    const { container } = render(<Hangman data={data} />)

    expect(container).toHaveTextContent('NEW GAME')
  })

  it('game starts when button clicked', () => {
    const { container } = render(<Hangman data={data} />)

    const firstTry = container.querySelector('#tries')
    expect(firstTry).toHaveTextContent('Left tries: 0')

    fireEvent.click(screen.getByText('NEW GAME'))

    const secondTry = container.querySelector('#tries')
    expect(secondTry).toHaveTextContent('Left tries: 6')
  })

  it('nothing is created when no data', () => {
    const { container } = render(<Hangman data={[]} />)
    const keyboard = container.querySelector('#keyboard')
    const button = container.querySelector('#start')

    expect(keyboard).toBeNull()
    expect(button).toBeNull()
  })
})
