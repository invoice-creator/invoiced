import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        products: List.of('Body Wash', 'Hand Soap')
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      products: ['Body Wash', 'Hand Soap']
    }));
  });

  it('handles SET_STATE with plain JS payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        products: ['Body Wash', 'Hand Soap']
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      products: ['Body Wash', 'Hand Soap']
    }));
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        products: ['Body Wash', 'Hand Soap']
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      products: ['Body Wash', 'Hand Soap']
    }));
  });

});
