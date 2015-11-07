import React from 'react';
import {List} from 'immutable';

const products = List.of('Body Wash', 'Hand Soap');

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {products: products});
  }
})