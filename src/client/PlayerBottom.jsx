import React, { useState, useEffect } from 'react';
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
  const [playerDuration, setPlayerDuration] = useState(0);
  const [playerCurrentTime, setPlayerCurrentTime] = useState(0);
  const [onPlay, setOnPlay] = useState(false);

  function play(idPlayer, e) {
    const player = document.querySelector(`#${idPlayer}`);
    player.addEventListener('loadeddata', setPlayerCurrentTime(player.currentTime));
    console.log(`aaaa`, player.currentTime);
    setPlayerDuration(Math.trunc(player.duration / 60));
    if (player.paused) {
      e.currentTarget.ariaLabel = 'pause';
      setOnPlay(true);
      return player.play();
    }
    e.currentTarget.ariaLabel = 'play';
    setOnPlay(false);
    return player.pause();
  }

  useEffect(() => {
    console.log(onPlay);
    console.log(playerCurrentTime);
    if (!onPlay) return;
    console.log('toto');
    const player = document.querySelector('#audioPlayer');

    player.addEventListener('loadeddata', setPlayerCurrentTime(player.currentTime));
  }, [playerCurrentTime]);

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
          value={playerCurrentTime / 60}
          min="0"
          max={playerDuration}
        />
      </div>

      <div className="audio">
        <div className="infos-duration">
          {playerCurrentTime} /{playerDuration} min
        </div>
        <div className="mute">
          <buttonc type="button">Mute</buttonc>
        </div>
      </div>
    </div>
  );
};

export default PlayerBottom;
