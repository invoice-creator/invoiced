import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import {InvoiceContainer} from './Invoice';
import {ProductSearchContainer} from './ProductSearch';
import {Modal} from 'react-bootstrap';

export const Main = React.createClass({
  
  getInitialState: function() {
    return {
      showModal: false,
      customerName: '',
      date: '',
      invoiceNumber: '',
      invoicedProducts: []
    };
  },
  
  close: function() {
    this.setState({
      showModal: false
    });
  },
  
  open: function() {
    this.setState({
      showModal: true
    });
  },
  
  save: function() {
    {alert('You Have Saved Your Invoice!')}
  },
  
  handleModalClick: function() {
    this.setState({
      showModal: true
    })
  },
  
  handleCustomerNameChange: function(customerName) {
    this.setState({
      customerName: customerName
    });
  },
  
  handleDateChange: function(date) {
    this.setState({
      date: date
    });
  },
  
  handleInvoiceNumberChange: function(invoiceNumber) {
    this.setState({
      invoiceNumber: invoiceNumber
    });
  },
  
  handleInvoiceProductClick: function(product) {
    var oldProducts = this.state.invoicedProducts.slice();
    oldProducts.push(product);
    this.setState({
      invoicedProducts: oldProducts,
    });
  },
  
  render: function() {
    var invoicedProducts = this.state.invoicedProducts;
    return (
      <div className="main">
        <h2 className="appTitle">Invoiced</h2>
        <InvoiceContainer
          handleCustomerNameChange={this.handleCustomerNameChange}
          handleDateChange={this.handleDateChange}
          handleInvoiceNumberChange={this.handleInvoiceNumberChange}
          handleModalClick={this.handleModalClick}
          invoicedProducts={this.state.invoicedProducts}
        />
        <ProductSearchContainer handleInvoiceProductClick={this.handleInvoiceProductClick} />
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>SteelBrick Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Your Invoice</h4>
            <hr />
            <h4>Invoice Information</h4>
            <p>{this.state.customerName}</p>
            <p>{this.state.date}</p>
            <p>{this.state.invoiceNumber}</p>
            <h4>Invoice Information</h4>
            {invoicedProducts.map(invoicedProduct => 
              <div key={invoicedProduct}>
                <p>{invoicedProduct.get('product_name')}</p>
                <p>{invoicedProduct.get('product_quantity')}</p>
                <p>{invoicedProduct.get('product_price')}</p>
                <p>{invoicedProduct.get('product_total')}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-default" onClick={this.close}>Close Invoice</button>
            <button className="btn btn-default" onClick={this.save}>Save Invoice</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
});

function mapStateToProps(state) {
  return {
    products: state.get('products')
  }
}

export const MainContainer = connect(
  mapStateToProps,
  actionCreators
)(Main);
