const http2 = require('http2');
const fs = require('fs');

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

const options = {
  key: fs.readFileSync('./self.key'),
  cert: fs.readFileSync('./self.crt')
}

const server = http2.createSecureServer(options);

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {

  console.log('****** Stream ******', stream);

  const store = createStore(newsApp, {}, applyMiddleware(reduxThunk));
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={'/'} context={context}>
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
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end(htmlToRender);
});

server.listen(8443, () => console.log('Server started on port 8443'));
