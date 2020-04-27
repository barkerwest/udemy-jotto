import React from 'react'
import {shallow} from 'enzyme'

import GuessedWordNumbers from './GuessedWordNumbers'
import { findByTestAttr, checkProps} from '../test/testUtils'


const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1}, 
    { guessedWord: 'learn', letterMatchCount: 0 }],
  };
  

const setup = (props={}) => {
    // use default props and then overwrite with supplied props
    const setupProps = {...defaultProps, ... props };
    const wrapper =  shallow(<GuessedWordNumbers {...setupProps} />)
    return wrapper;
  };

describe('properties', () => {

    test('valid properties', () => {
        checkProps(GuessedWordNumbers, defaultProps);
    });
});
describe('no entries', () => {

    let wrapper

    // function run before every test
    beforeEach( () => {
        wrapper = setup( { guessedWords: []});
    });

    test('renders correctly', () => {
        const attr = findByTestAttr(wrapper, 'component-guessed-word-numbers');
        expect(attr.length).toBe(1);
    });

    test('valid 0 number of entries', () => {
        // check the new counter value
        const counterDisplay = findByTestAttr(wrapper, 'guessed-count');
        expect(counterDisplay.text()).toContain(0);

    });
    
});

describe('guess in  entries', () => {

    let wrapper

    // function run before every test
    beforeEach( () => {
        wrapper = setup();
    });

    test('renders correctly', () => {
        const attr = findByTestAttr(wrapper, 'component-guessed-word-numbers');
        expect(attr.length).toBe(1);
    });

    test('valid number of entries', () => {
         // check the new counter value
         const counterDisplay = findByTestAttr(wrapper, 'guessed-count');
         expect(counterDisplay.text()).toContain(defaultProps.guessedWords.length);

    });
    
});