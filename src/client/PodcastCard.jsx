import React from 'react';
import './PodcastCard.scss';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  playIcon: {
    height: 38,
    width: 38
  }
}));

const PodcastCard = () => {
  const classes = useStyles();

  const bgImgPodcast = 'test.jpg';

  return (
    <div className="podcastCard">
      <div className="header">
        <div className="wrap">
          <div className="btn-play">
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </div>
          <div className="group">
            <div className="title">nom emission</div>
            <div className="date">date</div>
          </div>
        </div>
        <div className="duration">duree</div>
      </div>

      <div className="coverPodcast" style={{ backgroundImage: `url(${bgImgPodcast})` }} />
      <div className="content">
        <h2>titre podacst</h2>
      </div>
      <div className="footer">
        <Button variant="outlined" color="primary" size="small" href="#outlined-buttons">
          En savoir plus
        </Button>
      </div>
    </div>
  );
};

PodcastCard.propTypes = {};

export default PodcastCard;
