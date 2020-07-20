import React, { useState, useEffect, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { play, mute, formatDuration } from './util/utilFunctions';
import './PlayerBottom.scss';

const PlayerBottom = props => {
  const { onPlay, setOnPlay, isMute, setIsMute, playerRef, dataPlayer } = props;
  const [delay, setDelay] = useState(1000);
  const [playerDuration, setPlayerDuration] = useState(0);
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0);
  const [playerCurrentTimeA, setPlayerCurrentTimeA] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

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
      setPlayerCurrentTime(playerRef.current.currentTime);
    },
    onPlay ? delay : null
  );

  const onDrag = e => {
    setPlayerCurrentTime(e.target.value);
    playerRef.current.currentTime = e.target.value;
  };

  useEffect(() => {
    if (playerRef.current.src.length > 0) {
      setPlayerDuration(Math.trunc(playerRef.current.duration));
    }
  }, [onPlay]);

  return (
    <div className="player-bottom">
      <div className="infos">
        <div className="btnPlay">
          <IconButton
            onClick={() => {
              play(setPlayerDuration, playerRef, setOnPlay);
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
          onChange={event => onDrag(event)}
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
              mute(isMute, setIsMute, playerRef);
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
