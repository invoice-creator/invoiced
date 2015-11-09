import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const ProductSearch = React.createClass({
  mixins: [PureRenderMixin],
  getProducts: function() {
    console.log('props :', this.props);
    console.log('props products: ', this.props.products);
    return this.props.products || [];
  },
  render: function() {
    var products = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h4>Create A Product</h4>
            <form className="navbar-form navbar-right" onSubmit={this.createProductItem}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Product Name" required />
                <input type="number" className="form-control" placeholder="Quantity" required />
                <input type="number" step="any" className="form-control" placeholder="Price" required />
                <input type="number" className="form-control" placeholder="Total" required />
              </div>
              <button onSubmit={this.createProductItemData.bind(this)}>Create Product Item</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h4>Your Product Items</h4>
            <div className="table-wrapper">
              <table className="table table-hover">
                <thead>
                  <tr>Product Name</tr>
                </thead>
                <tbody>
                  {this.getProducts().map(product =>
                    <tr key={product}>
                      <td>{product}</td>
                      <td>
                        <button className="btn btn-default">Add Product Item</button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  },
  createProductItemData: function() {
    console.log('in createProductItemData');
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

