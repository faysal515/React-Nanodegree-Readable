import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';

const routes = () => (
  <Router>
    {/* https://github.com/ReactTraining/react-router/issues/4928#issuecomment-292432625 */}
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default routes;

/*
 need seperate route config for code splitting
 */
