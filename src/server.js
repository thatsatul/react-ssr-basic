/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import compression from 'compression';

import  newsApp  from '../src/client/reducers';
import reduxThunk from "redux-thunk";
import Router from './client/router';
import Layout from './client/layout';

const port = process.env.PORT || 3000;
const server = express();
server.use(compression());
server.use(express.static('dist'));
server.use('/static', express.static('static'));

// Creating a single index route to server our React application from.

// This is fired every time the server side receives a request
server.get('/**', handleRender);

function handleRender(req, res) {
  // Create a new Redux store instance
  // res.writeHead(200, { "Content-Type": "text/html" });
  const store = createStore(newsApp, {}, applyMiddleware(reduxThunk));
  const context = {};

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Router />
      </StaticRouter>
    </Provider>
  );
  // console.log('***** html ******', html);

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  const htmlToRender = Layout({html, preloadedState});
  // console.log('***** PreloadedState ******', preloadedState);
  // console.log('***** layout ******', htmlToRender);

  // Send the rendered page back to the client
  // res.set('Content-Encoding', 'gzip');
  res.send(htmlToRender);
}

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
