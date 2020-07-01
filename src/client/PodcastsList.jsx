import React from 'react';
import PodcastCard from './PodcastCard';
import { Container, Grid } from '@material-ui/core';

const PodcastsList = props => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4}>
            <PodcastCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PodcastsList;
