import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from "../src/containers/Home";


const routeMap = () => {
  return(
    <div>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/page/1" />}
      />
      <Route
        exact
        path="/page/:pageNum"
        component={Home}
      />
    </div>
  );
};

export default routeMap;
