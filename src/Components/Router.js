import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Detail from "Routes/Detail";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "./Header";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/show/:id" exact component={Detail} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/search" component={Search} />
        <Route path="/detail/popular" component={() => "Popular"} />
        <Route path="/tv" component={TV} />
        <Route path="/movie/:id/:info" exact component={Detail} />
        <Route path="/show/:id/:info" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
