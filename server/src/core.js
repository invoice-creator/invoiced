import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function setProducts(state, products) {
  return state.set('products', List(products));
}
