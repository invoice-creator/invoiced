import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('a list', () => {

    function addTitle(currentState, title) {
      return currentState.push(title);
    }

    it('is immutable', () => {
      let state = List.of('ProductName', 'Price');
      let nextState = addTitle(state, 'Quantity');

      expect(nextState).to.equal(List.of(
        'ProductName',
        'Price',
        'Quantity'
      ));
      expect(state).to.equal(List.of(
        'ProductName',
        'Price'
      ));
    });

  });

});
