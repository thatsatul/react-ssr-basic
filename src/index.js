import React from 'react';
import { hydrate } from 'react-dom';
import Router from '../router';
import { Provider } from 'react-redux';
import store from './store';
import '../scss/main.scss';

hydrate(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector('#app')
);

// console.log('serviceWorker in navigator', 'serviceWorker' in navigator);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // navigator.serviceWorker.getRegistrations().then((r)=>{r[0].unregister()});
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(function(registration) {
      // Successful registration
      console.log('Hooray. Service Worker registration successful, scope is:', registration.scope);
    }).catch(function(error) {
      // Failed registration, service worker won’t be installed
      console.log('Whoops. Service worker registration failed, error:', error);
    });
  });
}
