import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './back-office/Navigation';
import Podcasts from './client/Podcasts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/podcasts">
            <Podcasts />
          </Route>
          <Route path="/admin-radio-occitanie">
            <Navigation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
