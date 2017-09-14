import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomeContainer from './containers/home';
import CreatePost from './components/create'
import PostDetails from './components/postDetails'
const routes = () => (
  <Router>
    {/* https://github.com/ReactTraining/react-router/issues/4928#issuecomment-292432625 */}
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      {/*<Route path="/category/:id" component={HomeContainer} />*/}
      <Route exact path="/create" component={CreatePost} />
      <Route path="/post/:id" component={PostDetails} />
    </Switch>
  </Router>
);

export default routes;

/*
 need seperate route config for code splitting
 */
