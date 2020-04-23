import checkPropTypes from 'check-prop-types'
import rootReducer from '../src/reducers';
import { middlewares} from '../src/configureStore'
import { createStore, applyMiddleware } from 'redux';

// helper function to find node(s) with specific data-test value
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
  // as props are avlid no error will be returned
  expect(propError).toBeUndefined();
}

// function to create a store for unit testing
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
}