import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'
import { findByTestAttr} from '../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter()});

// helper function to render component
// using the spread operator "..." to split props into its 
// separate parts
const setup = (props={}) => {
    const wrapper =  shallow(<Congrats {...props} />)
    return wrapper;
  }


test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.length).toBe(1);
  });

test('renders no test when success prop is false', () => {
    const wrapper = setup({success : false});
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.text()).toBe('');
});

test('renders non empty congrats when success prop is true', () => {
    const wrapper = setup({success : true});
    const message = findByTestAttr(wrapper,'congrats-message')
    expect(message.text()).not.toBe('');
    expect(message.length).not.toBe(0);
});