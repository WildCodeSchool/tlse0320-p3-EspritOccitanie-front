import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import PodcastCard from './PodcastCard';

const PodcastsList = props => {
  // Get podcasts request
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/podcast').catch(function(error) {
        console.log(error.toJSON());
      });
      setPodcasts(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {podcasts.map(podcast => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <PodcastCard dataPodcasts={podcast} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default PodcastsList;
