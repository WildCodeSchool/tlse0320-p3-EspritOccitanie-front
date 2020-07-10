/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PodcastCard from './PodcastCard';

const ProgramPodcastsList = () => {
  // Get podcasts request
  const [programPodcastList, setProgramPodcastList] = useState([]);
  const { program_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/podcast?program=${program_id}`).catch(error => {
        console.log(error.toJSON());
      });
      console.log(result);
      setProgramPodcastList(result.data.result);
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
                <PodcastCard dataPodcasts={podcast} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ProgramPodcastsList;