import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middrware = [thunk];

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(...middrware)) );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);