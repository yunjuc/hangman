import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Hangman from '../components/Hangman';

it('App title exists', () => {
  const wrapper = shallow(<App />);
  const title = wrapper.find('.title').text();
  expect(title).toBe('Hangman');
});

it('Hangman component is rendered', () => {
  const wrapper = shallow(<App />);
  const counter = wrapper.find(Hangman).exists();
  expect(counter).toBe(true);
});
