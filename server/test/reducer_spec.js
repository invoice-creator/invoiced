import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_PRODUCTS', () => {
    const initialState = Map();
    const action = {type: 'SET_PRODUCTS', products: ['Body Wash']};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      products: ['Body Wash']
    }));
  });

  it('has an initial state', () => {
    const action = {type: 'SET_PRODUCTS', products: ['Body Wash']};
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      products: ['Body Wash']
    }));
  });

  it('can be used with reduce', () => {
    const actions = [
      {type: 'SET_PRODUCTS', products: ['Body Wash', 'Hand Saop']}
    ];
    const finalState = actions.reduce(reducer, Map());

    expect(finalState).to.equal(fromJS({
      products: ['Body Wash', 'Hand Soap']
    }));
  });

});
