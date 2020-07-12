import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './back-office/Navigation';
import PodcastsList from './client/PodcastsList';
import Contact from './back-office/Contact';
import ProgramList from './client/ProgramList';
import ProgramDetail from './client/ProgramDetail';
import PodcastDetail from './client/PodcastDetail';
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
            <Route exact path="/podcasts">
              <PodcastsList />
            </Route>
            <Route exact path="/podcasts/:id_podcast/:podcast_title">
              <PodcastDetail />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/emissions">
              <ProgramList />
            </Route>
            <Route exact path="/emission/:program_id">
              <ProgramDetail />
            </Route>
            <Route exact path="/admin-radio-occitanie">
              <Navigation />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
