import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Invoice from './components/Invoice';
import ProductSearch from './components/ProductSearch';

const routes = <Route component={App}>
  <Route path="/products" component={ProductSearch} />
  <Route path="/" component={Invoice} />
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);