/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PodcastCard.scss';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { slugify, handleAudio } from './util/utilFunctions';

const PodcastCard = props => {
  const {
    podcast_creation_date,
    podcast_description,
    podcast_duration,
    podcast_id,
    podcast_image,
    podcast_mp3,
    podcast_title,
    ro_program_program_id,
    program_title,
    category_name
  } = props.dataPodcasts;

  const { onPlay, setOnPlay, setIdPodastPlay, idPodastPlay, playerRef, setDataPlayer } = props;
  const [programName, setProgramName] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/program/${ro_program_program_id}`).catch(function(error) {
        console.log(`error pocast card`, error.toJSON());
      });
      setProgramName(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="podcastCard">
      <div className="header">
        <div className="wrap">
          <div className="btn-play">
            <IconButton
              aria-label="play"
              onClick={() =>
                handleAudio(
                  podcast_mp3,
                  podcast_id,
                  idPodastPlay,
                  onPlay,
                  programName,
                  podcast_title,
                  playerRef,
                  setIdPodastPlay,
                  setDataPlayer,
                  setOnPlay
                )
              }
            >
              {onPlay && idPodastPlay === podcast_id ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </div>
          <div className="group">
            <div className="title">{program_title}</div>
            <div className="date">{moment(podcast_creation_date).format('DD/MM/YYYY')}</div>
          </div>
        </div>
        <div className="duration">
          <AccessTimeIcon />
          {podcast_duration}
        </div>
      </div>

      <div
        className="coverPodcast"
        style={{
          backgroundImage: `url(${podcast_image ? podcast_image : '/radio-occitanie-default.jpg'})`
        }}
      />
      <div className="content">
        <h2>{podcast_title.substring(0, 40) + (podcast_title.length < 40 ? '' : '...')}</h2>
        <p>
          {podcast_description.substring(0, 80) + (podcast_description.length < 80 ? '' : '...')}
        </p>
      </div>
      <div className="footer">
        <div className="categoryTag">{category_name}</div>

        <Link component={RouterLink} to={`/podcasts/${podcast_id}/${slugify(podcast_title)}`}>
          <Button variant="outlined" color="primary" size="small">
            Voir plus
          </Button>
        </Link>
      </div>
    </div>
  );
};

PodcastCard.propTypes = {};

export default PodcastCard;
