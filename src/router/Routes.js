import React from 'react';
import { Route } from 'react-router-dom';
import NewsTopics from "../components/Home";


export default () => {
  return(
    <div>
      <Route exact path="/" component={NewsTopics} />
    </div>
  );
};
