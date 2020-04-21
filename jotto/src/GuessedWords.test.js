import React from 'react'
import {shallow} from 'enzyme'

import GuessedWords from './GuessedWords'
import { findByTestAttr, checkProps} from '../test/testUtils'


const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
  };
  

const setup = (props={}) => {
    // use default props and then overwrite with supplied props
     const setupProps = {...defaultProps, ... props };
    const wrapper =  shallow(<GuessedWords {...setupProps} />)
    return wrapper;
  };

  test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });

  // describe is a way of grouping tests
  describe ('if there are no words guessed', () => {

    let wrapper

    // function run before every test
    beforeEach( () => {
        wrapper = setup( { guessedWords: []});
    });

    test('renders without error', () => {
        const attr = findByTestAttr(wrapper, 'component-guessed-words');
        expect(attr.length).toBe(1);
    });

    test(' renders instructions to guess a word', () => {
        const message = findByTestAttr(wrapper,'guess-instructions')
        expect(message.length).not.toBe(0);
        expect(message.text().length).not.toBe(0);
    });
      
  });

  describe ('if there are words guessed', () => {
      
});