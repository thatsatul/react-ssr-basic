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

const port = process.env.SERVER_PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

console.log(`Env HOST and PORT = ${process.env.HOST} and ${process.env.SERVER_PORT}`);
console.log(`Final HOST and PORT = ${host} and ${port}`);

const server = express();
server.use(compression());
server.use(express.static('dist'));
server.use('/static', express.static('static'));

// This is fired every time the server side receives a request
server.use((req, res, next) => {
  console.log('**** Middleware - called on every server side request ****');
  next();
});

server.use('/api/test', (req, res, next) => {
  console.log('*** REQUEST ***', req.originalUrl);
  res.status(200).send({
    res: 'server req done',
  });
});

// Creating a single index route to server our React application from.
server.get('*', handleRender);

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

server.listen(port, host);
console.log(`Serving at http://localhost:${port}`);
