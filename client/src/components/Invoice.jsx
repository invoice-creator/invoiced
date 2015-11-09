import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Invoice = React.createClass({
  render: function() {
    return (
      <div className="invoice">
        <form>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input type="text" className="form-control" id="customerNameInput" placeholder="Customer Name" onChange={this.handleCustomerNameChange} />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="dateInput" placeholder="Date" onChange={this.handleDateChange} />
          </div>
          <div>
            <label htmlFor="invoiceNumber">Invoice Number</label>
            <input type="number" className="form-control" id="invoiceNumberInput" placeholder="Invoice Number" onChange={this.handleInvoiceNumberChange} />
          </div>
          <button type="submit" className="btn btn-default" onSubmit={this.handleSubmitInvoice}>Create Invoice</button>
        </form>
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
