import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';

export const App = () => (
  <>
  <Router>

    <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/reservation/:id">
          <Reservation />
        </Route>
      </Switch>

    <Footer />
    
  </Router>
  </>
);
