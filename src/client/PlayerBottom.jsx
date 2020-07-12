import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import './PlayerBottom.scss';

const PlayerBottom = props => {
  const { onPlay, setOnPlay, isMute, setIsMute, playerRef, dataPlayer } = props;

  const [delay, setDelay] = useState(1000);
  const [playerDuration, setPlayerDuration] = useState(0);
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0);

  // Play sound
  function play() {
    setPlayerDuration(Math.trunc(playerRef.current.duration));
    if (playerRef.current.paused) {
      setOnPlay(true);
      return playerRef.current.play();
    }
    setOnPlay(false);
    return playerRef.current.pause();
  }

  // Mute sound
  function mute() {
    if (isMute) {
      setIsMute(false);
      return (playerRef.current.muted = true);
    }
    setIsMute(true);
    return (playerRef.current.muted = false);
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
            onClick={() => {
              play();
            }}
          >
            {onPlay ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </div>
        <div className="group">
          <div className="title">
            {dataPlayer ? dataPlayer.programName.program_title : 'Nom émission'}
          </div>
          <div className="author"> {dataPlayer ? dataPlayer.podcast_title : 'Nom podcast'}</div>
        </div>
      </div>

      <div className="barPlayer">
        <audio id="audioPlayer" ref={playerRef}>
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
            onClick={() => {
              mute();
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
