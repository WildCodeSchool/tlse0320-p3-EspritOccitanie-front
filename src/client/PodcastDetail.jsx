import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { handleAudio } from './util/utilFunctions';
import './PodcastDetail.scss';

const useStyles = makeStyles(() => ({
  playIcon: {
    height: 25,
    width: 25
  }
}));

const PodcastDetail = props => {
  const { onPlay, setOnPlay, setIdPodastPlay, idPodastPlay, playerRef, setDataPlayer } = props;
  const [podcastData, setPodcastData] = useState([]);
  const { podcast_id } = useParams();

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/podcast/${podcast_id}`).catch(function(error) {
        console.log(error.toJSON());
      });
      setPodcastData(result.data[0]);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="PodcastDetail">
      <Container maxWidth="md">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div
              className="coverPodcast"
              style={{
                backgroundImage: `url(${
                  podcastData.podcast_image
                    ? podcastData.podcast_image
                    : '/radio-occitanie-default.jpg'
                })`
              }}
            ></div>

            <div className="player">
              <div className="wrap">
                <div className="btn-play">
                  <IconButton
                    aria-label="play/pause"
                    onClick={() =>
                      handleAudio(
                        podcastData.podcast_mp3,
                        podcastData.podcast_id,
                        idPodastPlay,
                        onPlay,
                        'podcastData.programName',
                        podcastData.podcast_title,
                        playerRef,
                        setIdPodastPlay,
                        setDataPlayer,
                        setOnPlay
                      )
                    }
                  >
                    {onPlay && idPodastPlay === podcastData.podcast_id ? (
                      <PauseIcon />
                    ) : (
                      <PlayArrowIcon />
                    )}
                  </IconButton>
                </div>
                <div className="group">
                  <div className="title">{podcastData.program_title}</div>
                  <div className="date">
                    {moment(podcastData.podcast_creation_date).format('DD/MM/YYYY')}
                  </div>
                </div>
              </div>
              <div className="duration">
                <AccessTimeIcon />
                {podcastData.podcast_duration}
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="content">
              <h1>{podcastData.podcast_title}</h1>

              <span className="tagAnimateur">
                {podcastData.map(animator => {
                  return (
                    <span className="tagAnimateur">
                      <span>
                        <img src="/anim.svg" alt="icon" />
                      </span>
                      {` ${animator.animator_firstname} ${animator.animator_lastname} `}
                    </span>
                  );
                })}
              </span>

              <p>{podcastData.podcast_description}</p>
              <div className="footer-content">
                <div className="categoryTag">{podcastData.category_name}</div>

                {podcastData.podcast_mp3 ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href={podcastData.podcast_mp3}
                  >
                    Télécharger le podcast
                  </Button>
                ) : null}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PodcastDetail;
