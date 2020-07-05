import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './PlayerBottom.scss';

const useStyles = makeStyles(() => ({
  playIcon: {
    height: 25,
    width: 25
  }
}));

function play(idPlayer, e) {
  let player = document.querySelector('#' + idPlayer);
  console.log(player.currentTime);
  console.log(Math.trunc(player.duration / 60));

  if (player.paused) {
    e.currentTarget.ariaLabel = 'pause';
    return player.play();
  } else {
    e.currentTarget.ariaLabel = 'play';
    return player.pause();
  }
}

function resume(idPlayer) {
  let player = document.querySelector('#' + idPlayer);

  player.currentTime = 0;
  player.pause();
}

const PlayerBottom = () => {
  const classes = useStyles();
  const [duration, setDuration] = useState(0);
  return (
    <div className="player-bottom">
      <div className="infos">
        <div className="btnPlay">
          <IconButton aria-label="pause" onClick={e => play('audioPlayer', e)}>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </div>
        <div className="group">
          <div className="title">C'est l'oiseau blanc</div>
          <div className="author">tristan maciag</div>
        </div>
      </div>

      <div className="barPlayer">
        <audio id="audioPlayer">
          <source src="/itw-camillenaude.mp3" />
        </audio>

        <input type="range" id="vol" name="vol" value="30" min="0" max="100" />
      </div>

      <div className="audio">
        <div className="infos-duration">{duration} min</div>
        <div className="mute">
          <button>Mute</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerBottom;
