import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Invoice = React.createClass({
  
  handleCustomerNameChange: function(event) {
    this.props.handleCustomerNameChange(event.target.value);
  },
  
  handleDateChange: function(event) {
    this.props.handleDateChange(event.target.value);
  },
  
  handleInvoiceNumberChange: function(event) {
    this.props.handleInvoiceNumberChange(event.target.value);
  },
  
  getInvoicedProducts: function() {
    return this.props.invoicedProducts;
  },
  
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <div className="invoice">
              <form>
                <div className="form-group">
                  <label htmlFor="customerName">Customer Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="customerNameInput" 
                    placeholder="Customer Name" 
                    onChange={this.handleCustomerNameChange} />
                </div>
                <div>
                  <label htmlFor="date">Date</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="dateInput" 
                    placeholder="Date" 
                    onChange={this.handleDateChange} />
                </div>
                <div>
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="invoiceNumberInput" 
                    placeholder="Invoice Number" 
                    onChange={this.handleInvoiceNumberChange} />
                </div>
                <button 
                  type="submit"
                  className="btn btn-default" 
                  id="createInvoice"
                  onClick={this.props.handleModalClick}>Create Invoice
                </button>
              </form>
            </div>
          </div>
          <div className="col-xs-6">
            <h4>Invoiced Products</h4>
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
                  {this.getInvoicedProducts().map(invoicedProduct => 
                    <tr key={invoicedProduct}>
                      <td>{invoicedProduct.get("product_name")}</td>
                      <td>{invoicedProduct.get("product_quantity")}</td>
                      <td>{invoicedProduct.get("product_price")}</td>
                      <td>{invoicedProduct.get("product_total")}</td>
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
    products: state.getIn(['products'])
  }
}

export const InvoiceContainer = connect(
  mapStateToProps,
  actionCreators
)(Invoice);
