import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './back-office/Navigation';
import Contact from './client/Contact';
import ProgramDetail from './client/ProgramDetail';
import PodcastDetail from './client/PodcastDetail';
import Navbar from './client/Navbar';
import Apropos from './client/Apropos';
import PageList from './client/PageList';
import MentionsLegal from './client/MentionsLegal';
import PlayerBottom from './client/PlayerBottom';
import LoginPage from './client/LoginPage';
import Footer from './client/Footer';
import ProgrammationTab from './client/ProgrammationTab';
import './App.css';

function App() {
  const [onPlay, setOnPlay] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const [idPodastPlay, setIdPodastPlay] = useState();
  const [dataPlayer, setDataPlayer] = useState();
  const playerRef = useRef();
  const url = window.location.href.split('/');

  return (
    <div className="App">
      <Router>
        {url[3] !== 'admin-radio-occitanie' && <Navbar />}
        <div className="main-ro">
          <Switch>
            <Route exact path="/mentions-legales">
              <MentionsLegal />
            </Route>
            <Route exact path="/qui-sommes-nous">
              <Apropos />
            </Route>

            <Route exact path="/">
              <Redirect to="/podcasts" />
            </Route>

            <Route exact path="/podcasts">
              <PageList 
              onPlay={onPlay}
              setOnPlay={setOnPlay}
              setIdPodastPlay={setIdPodastPlay}
              idPodastPlay={idPodastPlay}
              playerRef={playerRef}
              setDataPlayer={setDataPlayer}/>
            </Route>
            <Route exact path="/podcasts/:podcast_id/:podcast_title">
              <PodcastDetail
                onPlay={onPlay}
                setOnPlay={setOnPlay}
                setIdPodastPlay={setIdPodastPlay}
                idPodastPlay={idPodastPlay}
                playerRef={playerRef}
                setDataPlayer={setDataPlayer}
              />
            </Route>
            <Route exact path="/grille-des-programmes">
              <ProgrammationTab />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/emissions">
              <PageList />
            </Route>
            <Route exact path="/emission/:program_id/:program_title">
              <ProgramDetail
                onPlay={onPlay}
                setOnPlay={setOnPlay}
                setIdPodastPlay={setIdPodastPlay}
                idPodastPlay={idPodastPlay}
                playerRef={playerRef}
                setDataPlayer={setDataPlayer}
              />
            </Route>
            <Route exact path="/admin-radio-occitanie">
              <Navigation />
            </Route>
          </Switch>
          {url[3] !== 'admin-radio-occitanie' && <Footer />}
        </div>
        {url[3] !== 'admin-radio-occitanie' && (
          <PlayerBottom
            onPlay={onPlay}
            setOnPlay={setOnPlay}
            isMute={isMute}
            setIsMute={setIsMute}
            playerRef={playerRef}
            dataPlayer={dataPlayer}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
