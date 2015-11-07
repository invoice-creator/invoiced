import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const ProductSearch = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="productSearch">
        This is the ProductSearch component
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    products: state.getIn(['products'])
  }
}

export const ProductSearchContainer = connect(
  mapStateToProps,
  actionCreators
)(ProductSearch);

