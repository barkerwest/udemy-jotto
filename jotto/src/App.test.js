import React from 'react';
import { render } from '@testing-library/react';
import App, {UnconnectedApp} from './App';
import {shallow} from 'enzyme'
import { findByTestAttr, storeFactory} from '../test/testUtils'


// helper function to render component
// using the spread operator "..." to split props into its 
// separate parts
const setup = (initialState={}) => {
  // setup a store to use
  const store = storeFactory(initialState);
  // use dive to get the actual component as the connect call in
  // Input.js wraps it in a ContentProvider. Then dive agin to get 
  // the actual component
  const wrapper =  shallow(<App store={store} />).dive().dive();
  // just to see the effects of dive
  //console.log(wrapper.debug());
  return wrapper;
}

test('renders learn react link', () => {
  //const { getByText } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});

describe('redux props', () => {
  test('has success piece of state as props', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('has guessedWord piece of state as props', () => {
    const guessedWords = [{guessedWord:'train', letterMatchCount: 3}];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });

  test('has secretWord piece of state as props', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
    

  test('has getSecretWord actionCreator available as function props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });

  test('getSecretWord runs on app mount', () => {
    const getSecretWordMock = jest.fn();

    const props = {
      getSecretWord: getSecretWordMock,
      success:false,
      guessedWords: []
    }

    // setup using app component with getSecretWordMock as getSecretWord prop
    const wrapper = shallow(<UnconnectedApp {...props}/>);

    wrapper.instance().componentDidMount();

    // check to see if mock run
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });

});
