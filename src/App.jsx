import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './back-office/Navigation';
import PodcastsList from './client/PodcastsList';
import Contact from './back-office/Contact';
import ProgramList from './client/ProgramList';
import ProgramDetail from './client/ProgramDetail';
import Navbar from './client/Navbar';
import LoginPage from './client/LoginPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-ro">
          <Switch>
            <Route path="/podcasts">
              <PodcastsList />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/emissions">
              <ProgramList />
            </Route>
            <Route path="/emission/:program_id">
              <ProgramDetail />
            </Route>
            <Route path="/admin-radio-occitanie">
              <Navigation />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
