import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import './PlayerBottom.scss';

const useStyles = makeStyles(() => ({
  playIcon: {
    height: 25,
    width: 25
  }
}));

const PlayerBottom = () => {
  const classes = useStyles();
  const [delay, setDelay] = useState(1000);
  const [playerDuration, setPlayerDuration] = useState(0);
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0);
  const [onPlay, setOnPlay] = useState(false);

  function play(idPlayer, e) {
    const player = document.querySelector(`#${idPlayer}`);
    setPlayerDuration(Math.trunc(player.duration));
    if (player.paused) {
      e.currentTarget.ariaLabel = 'pause';
      setOnPlay(true);
      return player.play();
    }
    e.currentTarget.ariaLabel = 'play';
    setOnPlay(false);
    return player.pause();
  }

  useInterval(
    () => {
      const player = document.querySelector('#audioPlayer');
      setPlayerCurrentTime(player.currentTime);
    },
    onPlay ? delay : null
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  var moment = require('moment');
  require('moment-duration-format');
  function formatDuration(duration) {
    return moment.duration(duration.toString(), 'seconds').format('mm:ss', { trim: false });
  }

  return (
    <div className="player-bottom">
      <div className="infos">
        <div className="btnPlay">
          <IconButton
            aria-label="pause"
            onClick={e => {
              play('audioPlayer', e);
            }}
          >
            {onPlay ? (
              <PauseIcon className={classes.playIcon} />
            ) : (
              <PlayArrowIcon className={classes.playIcon} />
            )}
          </IconButton>
        </div>
        <div className="group">
          <div className="title">C'est l'oiseau blanc</div>
          <div className="author">tristan maciag</div>
        </div>
      </div>

      <div className="barPlayer">
        <audio id="audioPlayer">
          <source src="http://www.esprit-occitanie.fr/emissions/capecap/2020-03-16capecap(abbearnaud).mp3" />
        </audio>

        <input
          type="range"
          id="vol"
          name="vol"
          value={playerCurrentTime}
          min="0"
          max={playerDuration}
        />
      </div>

      <div className="audio">
        <div className="infos-duration">
          {formatDuration(playerCurrentTime)} | {formatDuration(playerDuration)}
        </div>
        <div className="mute">
          <buttonc type="button">Mute</buttonc>
        </div>
      </div>
    </div>
  );
};

export default PlayerBottom;
