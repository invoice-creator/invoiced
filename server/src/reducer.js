import {setProducts, INITIAL_STATE} from './core';

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return setProducts(state, action.products);
  }
  return state;
}
