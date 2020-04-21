import React from 'react'
import {shallow} from 'enzyme'

import Congrats from './Congrats'
import { findByTestAttr, checkProps} from '../test/testUtils'

const defaultProps = { success:false};

// helper function to render component
// using the spread operator "..." to split props into its 
// separate parts
const setup = (props={}) => {
    // use default props and then overwrite with supplied props
     const setupProps = {...defaultProps, ... props };
    const wrapper =  shallow(<Congrats {...setupProps} />)
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

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false};
  checkProps(Congrats, expectedProps)
})