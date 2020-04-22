import React from 'react'
import {shallow} from 'enzyme'

import Input from './Input'
import { findByTestAttr, storeFactory} from '../test/testUtils'


const defaultProps = { success:false};

// helper function to render component
// using the spread operator "..." to split props into its 
// separate parts
const setup = (initialState={}) => {
    // setup a store to use
    const store = storeFactory(initialState);
    // use dive to get the actual component as the connect call in
    // Input.js wraps it in a ContentProvider. Then dive agin to get 
    // the actual component
    const wrapper =  shallow(<Input store={store} />).dive().dive();
    // just to see the effects of dive
    // console.log(wrapper.debug());
    return wrapper;
  }

describe ('render', () => {

    describe ( ' word has not been guessed', () => {
        test('renders without error', () => {
            const input = setup();

        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

        });

    })

    describe ( ' word has  been guessed', () => {
        test('renders without error', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submit button', () => {

        });

    })
});

describe ('update state', () => {

});

