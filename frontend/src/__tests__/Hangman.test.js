import React from 'react';
import { shallow } from 'enzyme';
import Hangman from '../components/Hangman';

it('a dummy test...', () => {
  const wrapper = shallow(<Hangman />);
  const mock = wrapper.find('#game');
  expect(mock).toBeTruthy();
});

// ** need to add mock apollo client for the rest tests to run **
// const wrapper = shallow(<Hangman />);
// console.log(wrapper.debug());
//
// it('Keyboard is presented', () => {
//   const keys = wrapper.find('#keyboard').children();
//   expect(keys).to.have.lengthOf(26);
// });
//
// it('Button is presented', () => {
//   const start = wrapper.find('#start').text();
//   expect(start).toBe('NEW GAME');
// });
//
// it('Initial state of tries = 0', () => {
//   const wrapper = shallow(<Hangman />);
//   expect(wrapper.state().tries).to.equal(0);
// });
//
// it('New game state of tries = 6', () => {
//   const wrapper = shallow(<Hangman />);
//   const button = wrapper.find('button').at(1).simulate('click');;
//   expect(wrapper.state().tries).to.equal(6);
// });
//
// it('Start a new game', () => {
//   const button = wrapper.find('#start').simulate('click');
//   const game = wrapper.find('#game');
//   expect(game).to.have.lengthOf(1);
// });
