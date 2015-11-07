import React from 'react';
import {List, Map} from 'immutable';

const products = List.of('Body Wash', 'Hand Soap');

export default React.createClass({
  render: function() {
    return this.props.children;
  }
})