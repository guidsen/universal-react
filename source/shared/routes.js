import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/App';
import OtherPage from './components/OtherPage';

export default (browserHistory) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/test" component={OtherPage} />
  </Router>
);
