import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteMap from './Routes';

const routes = () => {
  return (
    <BrowserRouter>
      <RouteMap />
    </BrowserRouter>
  );
};

export default routes;
