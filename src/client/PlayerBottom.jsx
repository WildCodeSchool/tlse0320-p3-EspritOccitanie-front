import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import './PlayerBottom.scss';

const PlayerBottom = props => {
  const { onPlay, setOnPlay, isMute, setIsMute } = props;

  const [delay, setDelay] = useState(1000);
  const [playerDuration, setPlayerDuration] = useState(0);
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0);

  // Play sound
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

  // Mute sound
  function mute(idPlayer, e) {
    const player = document.querySelector(`#${idPlayer}`);
    if (isMute) {
      e.currentTarget.ariaLabel = 'mute';
      setIsMute(false);
      return (player.muted = true);
    }
    e.currentTarget.ariaLabel = 'on';
    setIsMute(true);
    return (player.muted = false);
  }

  // UseInterval function tool
  function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
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

  // Update currentTime
  useInterval(
    () => {
      const player = document.querySelector('#audioPlayer');
      setPlayerCurrentTime(player.currentTime);
    },
    onPlay ? delay : null
  );

  // Format for duration (ss to mm:ss)
  let moment = require('moment');
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
            {onPlay ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </div>
        <div className="group">
          <div className="title">C'est l'oiseau blanc</div>
          <div className="author">Jean miche</div>
        </div>
      </div>

      <div className="barPlayer">
        <audio id="audioPlayer">
          <source src="" />
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
          <IconButton
            aria-label="mute"
            onClick={e => {
              mute('audioPlayer', e);
            }}
          >
            {!isMute ? <VolumeOffIcon /> : <VolumeMuteIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PlayerBottom;
