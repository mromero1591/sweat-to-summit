import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard/Dashboard";
import Leaderboard from "./Components/Leaderboard/Leaderboard";

export default (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/leaderboard" component={Leaderboard} />
  </Switch>
);
