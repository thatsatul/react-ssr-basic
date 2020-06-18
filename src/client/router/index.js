import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "../containers/Home";

const router = () => {
  return(
    <Switch>
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
    </Switch>
  );
};

export default router;
