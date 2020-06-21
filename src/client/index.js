import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './router';
import newsApp from './reducers';
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

import './scss/main.scss';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(newsApp, preloadedState, applyMiddleware(reduxThunk));

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);

// console.log('serviceWorker in navigator', 'serviceWorker' in navigator);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // navigator.serviceWorker.getRegistrations().then((r)=>{r[0].unregister()});
    navigator.serviceWorker.register('./sw.js', {scope: '/'})
    .then(function(registration) {
      // Successful registration
      console.log('Hooray. Service Worker registration successful, scope is:', registration.scope);
    }).catch(function(error) {
      // Failed registration, service worker won’t be installed
      console.log('Whoops. Service worker registration failed, error:', error);
    });
  });
}
