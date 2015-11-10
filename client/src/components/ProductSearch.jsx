import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const ProductSearch = React.createClass({
  getProducts: function() {
    return this.props.products || [];
  },
  getInvoicedProducts: function() {
    return this.props.invoicedProducts || [];
  },
  render: function() {
    return (
      <div className="container">
        <div className="row" id="productSelection">
          <div className="col-xs-12">
            <h4>Select A Product To Invoice</h4>
            <div className="table-wrapper">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getProducts().map(product =>
                    <tr key={product}>
                      <td>{product.get("product_name")}</td>
                      <td>{product.get("product_quantity")}</td>
                      <td>{product.get("product_price")}</td>
                      <td>{product.get("product_total")}</td>
                      <td>
                        <button 
                          className="btn btn-default"
                          onClick={this.props.handleInvoiceProductClick.bind(null, product)}
                        >Invoice Product</button>
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
  }
});

function mapStateToProps(state) {
  return {
    products: state.get('products')
  }
}

export const ProductSearchContainer = connect(
  mapStateToProps,
  actionCreators
)(ProductSearch);

