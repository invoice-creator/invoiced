import {List} from 'immutable';

export function setProducts(state, products) {
  return state.set('products', List(products));
}