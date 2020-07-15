/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PodcastCard from './PodcastCard';

const ProgramPodcastsList = props => {
  const { onPlay, setOnPlay, setIdPodastPlay, idPodastPlay, playerRef, setDataPlayer } = props;
  // Get podcasts request
  const [programPodcastList, setProgramPodcastList] = useState([]);
  const { program_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/podcast?program=${program_id}`).catch(error => {
        console.log(error.toJSON());
      });
      setProgramPodcastList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {programPodcastList.map(podcast => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <PodcastCard
                  dataPodcasts={podcast}
                  onPlay={onPlay}
                  setOnPlay={setOnPlay}
                  setIdPodastPlay={setIdPodastPlay}
                  idPodastPlay={idPodastPlay}
                  playerRef={playerRef}
                  setDataPlayer={setDataPlayer}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ProgramPodcastsList;
