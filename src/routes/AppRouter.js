import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Home from "../screens/Home";
import Store from "../screens/Store";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LogInScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/store" component={Store} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
