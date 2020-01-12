import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { selectPost, fetchComments } from './actions'

const store = createStore(
    allReducers,
    applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
  );

// store.dispatch(selectPost(2))
// store.dispatch(fetchComments(2)).then(() => console.log(store.getState()))
store.dispatch(fetchComments(1)).then(() => console.log(store.getState()))




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
