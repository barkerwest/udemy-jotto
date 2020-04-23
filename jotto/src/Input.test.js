import React from 'react'
import {shallow} from 'enzyme'

import Input, {UnconnectedInput} from './Input'
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
    //console.log(wrapper.debug());
    return wrapper;
  }

describe ('render', () => {

    describe ( ' word has not been guessed', () => {

        let wrapper;

        beforeEach(() => {
            const initialState = { success: false};
            wrapper = setup(initialState);
        })

        test('renders input ', () => {
            const input = findByTestAttr(wrapper, 'component-input')
            expect(input.length).toBe(1);
         });

        test('renders input box', () => {
           const inputBox = findByTestAttr(wrapper, 'input-box')
           expect(inputBox.length).toBe(1);
        });

        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(1);
        });

    })

    describe ( ' word has  been guessed', () => {

        let wrapper;

        beforeEach(() => {
            const initialState = { success: true};
            wrapper = setup(initialState);
        })
        test('renders without error', () => {
            const input = findByTestAttr(wrapper,"component-input")
            expect(input.length).toBe(1);
        });

        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box")
            expect(inputBox.length).toBe(0);
        });
        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button")
            expect(submitButton.length).toBe(0);

        });

    })
});

describe ('redux props', () => {
    test('has success piece of state as props', () => {
        const success = true;
        const wrapper = setup({success});
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    })

    test('has guessWord actionCreator available as function props', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })

    
});

describe('guessWord creator call', () => {
    test('guessWord runs on submit button click', () => {
        const guessWordMock = jest.fn();
    
        const props = {
          guessWord: guessWordMock,
          success:false,
        }
    
        const wrapper = shallow(<UnconnectedInput {...props}/>);

        const submitButton = findByTestAttr(wrapper, 'submit-button')

        submitButton.simulate('click');
        
        // check to see if mock run
        const guessWordMockCount = guessWordMock.mock.calls.length;
        expect(guessWordMockCount).toBe(1);
      });

})

