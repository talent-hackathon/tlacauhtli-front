import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route
  } from "react-router-dom";

import LogInScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen'

const AppRouter = () => {
  return (
  <Router>
    <Switch>
      <Route exact path="/login" component={LogInScreen} /> 
      <Route exact path="/register" component={RegisterScreen} /> 
    </Switch>
  </Router>
  );
};

export default AppRouter;
