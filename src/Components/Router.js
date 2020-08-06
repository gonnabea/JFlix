import React from "react"
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Home from "Routes/Home"
import TV from "Routes/TV"
import Search from "Routes/Search"
import Popular from "Routes/Popular"
import Detail from "Routes/Detail"
import Header from "./Header"

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/tv/popular" exact component={Popular} />
      <Route path="/search" exact component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
)
