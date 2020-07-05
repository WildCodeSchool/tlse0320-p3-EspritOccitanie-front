import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import PodcastCard from './PodcastCard';

import './pagination.scss';

const PodcastsList = () => {
  // Get podcasts request
  const [podcasts, setPodcasts] = useState([]);
  const [nbPodcasts, setNbPodcasts] = useState();
  const [paginationPodcast, setPaginationPodcast] = useState([]);
  const [positionPage, setPositionPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/podcast').catch(function(error) {
        console.log(error.toJSON());
      });
      setPodcasts(result.data);
      setNbPodcasts(result.data.length);
      const nbPages = Math.ceil(result.data.length / 9);
      setPaginationPodcast(Array.from(Array(nbPages).keys()));
    };
    fetchData();
  }, []);

  const startSlicePagination = positionPage === 1 ? 0 : positionPage * 9 - 9;
  const endSlicePagination = 9 * positionPage;

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {podcasts.slice(startSlicePagination, endSlicePagination).map(podcast => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <PodcastCard dataPodcasts={podcast} />
              </Grid>
            );
          })}
        </Grid>

        {paginationPodcast.map(pagination => {
          return (
            <button className="pagination-ro" onClick={() => setPositionPage(pagination + 1)}>
              {pagination + 1}
            </button>
          );
        })}
      </Container>
    </div>
  );
};

export default PodcastsList;
