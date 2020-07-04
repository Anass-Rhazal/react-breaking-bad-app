
import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import EpisodesList from './components/episodes-list';
import EpisodeDetail from './components/episode-detail';
import CartList from "./components/cart-list";

export default function AppRouters() {
    return <Switch>
     <Route path="/cart">
      <CartList  />
    </Route>

    <Route path="/:id">
      <EpisodeDetail />
    </Route>
    <Route path="/">
      <EpisodesList />
    </Route>
  </Switch>
}

