import checkPropTypes from 'check-prop-types'

// helper function to find node(s) with specific data-test value
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
  // as props are avlid no error will be returned
  expect(propError).toBeUndefined();
}