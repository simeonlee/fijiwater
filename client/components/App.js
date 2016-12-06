import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import StorePage from './StorePage';
import WOW from 'wowjs/dist/wow.min.js';
import reducer from '../redux/reducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Combine reducers to be included in 'createStore'
const reducers = combineReducers({
  reducer,
});

// Create store that houses state-tree of app
// Can be modified by dispatching actions on above reducers
// (see 'redux/' for actions)
const store = createStore(reducers);

export default class App extends Component {
  constructor(props) {
    super(props);
    new WOW().init();
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={StorePage}>
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
}