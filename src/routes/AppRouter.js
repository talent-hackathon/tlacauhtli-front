import React from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import PublicScreenRouter from './PublicScreenRouter';
import UserScreenRouter from './UserScreenRouter';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';

const AppRouter = () => {


  const {logged} = useSelector(state => state.Auth.user)

 
  return (
  <Router>
    <div >
      <Switch>
        <PublicRoute
          path="/"
          component={PublicScreenRouter}
          isAuthenticated={logged}
        />
        <PrivateRoute
          path="/admin"
          component={UserScreenRouter}
          isAuthenticated={logged}
        />
      </Switch>
    </div>
  </Router>
  );
};

export default AppRouter;
