import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const PodcastCard = props => {
  const {
    podcast_creation_date,
    podcast_description,
    podcast_duration,
    podcast_id,
    podcast_image,
    podcast_mp3,
    podcast_title,
    ro_category_category_id,
    ro_program_program_id
  } = props.dataPodcasts;

  const [programName, setProgramName] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/program/${ro_program_program_id}`).catch(function(error) {
        console.log(error.toJSON());
      });
      setProgramName(result.data);
    };
    fetchData();
  }, []);

  const classes = useStyles();

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
            <div className="title">{programName.program_title}</div>
            <div className="date">{podcast_creation_date}</div>
          </div>
        </div>
        <div className="duration">{podcast_duration}</div>
      </div>

      <div className="coverPodcast" style={{ backgroundImage: `url(${podcast_image})` }} />
      <div className="content">
        <h2>{podcast_title}</h2>
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
