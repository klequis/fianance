import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;

const RoutedApp = () => (
  <Router history={hashHistory} >
    <Redirect from="/" to="/issues" />
    <Route path="/issues" component={IssueList} />
    <Route path="/issue/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);    // Render the component inside the content Node

if (module.hot) {
  module.hot.accept();
}
