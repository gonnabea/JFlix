import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Popular from "Routes/Popular";

export default () => (
    
    <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/tv" exact component={TV}/>
        <Route path="/tv/popular" exact component={Popular}/>
        <Route path="/search" exact component={Search}/>
        <Redirect from="*" to="/" />
        </Switch>
    </Router>
    
);