import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import SearchPage from "../pages/SearchPage";
import OrganizationPage from "../pages/OrganizationPage";
import FollowersPage from "../pages/FollowersPage";
import FollowingPage from "../pages/FollowingPage";
import UserPage from "../pages/UserPage";
import PageNotFound from "../pages/PageNotFound";

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route path="/organization/:login" component={OrganizationPage} />
      <Route exact path="/user/:login/followers" component={FollowersPage} />
      <Route exact path="/user/:login/following" component={FollowingPage} />
      <Route path="/user/:login" component={UserPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
