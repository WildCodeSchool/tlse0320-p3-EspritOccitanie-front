import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './back-office/Navigation';
import PodcastsList from './client/PodcastsList';
import Contact from './back-office/Contact';
import ProgramList from './client/ProgramList';
import ProgramDetail from './client/ProgramDetail';
import PodcastDetail from './client/PodcastDetail';
import Navbar from './client/Navbar';
import PlayerBottom from './client/PlayerBottom';
import LoginPage from './client/LoginPage';
import './App.css';

function App() {
  const [onPlay, setOnPlay] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const [idPodastPlay, setIdPodastPlay] = useState();
  const [dataPlayer, setDataPlayer] = useState();
  const playerRef = useRef();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-ro">
          <Switch>
            <Route exact path="/podcasts">
              <PodcastsList
                onPlay={onPlay}
                setOnPlay={setOnPlay}
                setIdPodastPlay={setIdPodastPlay}
                idPodastPlay={idPodastPlay}
                playerRef={playerRef}
                setDataPlayer={setDataPlayer}
              />
            </Route>
            <Route exact path="/podcasts/:id_podcast/:podcast_title">
              <PodcastDetail
                onPlay={onPlay}
                setOnPlay={setOnPlay}
                setIdPodastPlay={setIdPodastPlay}
                idPodastPlay={idPodastPlay}
                playerRef={playerRef}
                setDataPlayer={setDataPlayer}
              />
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
      <PlayerBottom
        onPlay={onPlay}
        setOnPlay={setOnPlay}
        isMute={isMute}
        setIsMute={setIsMute}
        playerRef={playerRef}
        dataPlayer={dataPlayer}
      />
    </div>
  );
}

export default App;
