import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setProducts} from '../src/core';

describe('application logic', () => {

  describe('setProducts', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const products = List.of('Body Wash', 'Hand Soap');
      const nextState = setProducts(state, products);
      expect(nextState).to.equal(Map({
        products: List.of('Body Wash', 'Hand Soap')
      }));
    });

    it('converts to immutable', () => {
      const state = Map();
      const products = ['Body Wash', 'Hand Soap'];
      const nextState = setProducts(state, products);
      expect(nextState).to.equal(Map({
        products: List.of('Body Wash', 'Hand Soap')
      }));
    });

  });

  describe('next', () => {

    it('takes the selected products and moves them under invoiced', () => {
      const state = Map({
        products: List.of('Body Wash', 'Hand Soap', 'Shampoo')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        invoiced: Map({
          invoiceProducts: List.of('Body Wash', 'Hand Soap');
        }),
        products: List.of('Shampoo')
      }));
    });
    
  });

});