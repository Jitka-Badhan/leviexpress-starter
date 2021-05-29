import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';

export const App = () => (
  <>
    <Header />

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reservation">
          <h2>Detail jízdenky</h2>
        </Route>
      </Switch>
    </Router>

    <Footer />
  </>
);
