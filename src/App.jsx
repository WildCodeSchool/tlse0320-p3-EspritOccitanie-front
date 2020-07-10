import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './back-office/Navigation';
import PodcastsList from './client/PodcastsList';
import Contact from './back-office/Contact';
import ProgramList from './client/ProgramList';
import Navbar from './client/Navbar';
import PlayerBottom from './client/PlayerBottom';
import LoginPage from './client/LoginPage';
import './App.css';

function App() {
  const [onPlay, setOnPlay] = useState(false);
  const [isMute, setIsMute] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-ro">
          <Switch>
            <Route path="/podcasts">
              <PodcastsList
                onPlay={onPlay}
                setOnPlay={setOnPlay}
                isMute={isMute}
                setIsMute={setIsMute}
              />
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
            <Route path="/admin-radio-occitanie">
              <Navigation />
            </Route>
          </Switch>
        </div>
      </Router>
      <PlayerBottom onPlay={onPlay} setOnPlay={setOnPlay} isMute={isMute} setIsMute={setIsMute} />
    </div>
  );
}

export default App;
