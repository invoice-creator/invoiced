import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Invoice = React.createClass({
  render: function() {
    return (
      <div className="invoice">
        {This is the Invoice component}
      </div>
    );
  }
});

function matStateToProps(state) {
  return {
    products: state.getIn(['products'])
  }
}

export const InvoiceContainer = connect(
  matStateToProps,
  actionCreators
)(Invoice);
