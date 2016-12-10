import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import StorePage from './StorePage';
import WOW from 'wowjs/dist/wow.min.js';

// Holds some application logic and react router logic (currently unused)
export default class App extends Component {
  constructor(props) {
    super(props);
    new WOW().init();
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={StorePage}>
          </Route>
        </Router>
      </div>
    )
  }
}