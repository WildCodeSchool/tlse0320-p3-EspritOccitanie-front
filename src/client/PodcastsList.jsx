import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import PodcastCard from './PodcastCard';
import AdvancedSearchBar from './AdvancedSearchBar';

import './pagination.scss';

const PodcastsList = props => {
  const { podcastsList, setPodcastsList } = props;
  const { onPlay, setOnPlay, setIdPodastPlay, idPodastPlay, playerRef, setDataPlayer } = props;
  const [nbPodcasts, setNbPodcasts] = useState();
  const [paginationPodcast, setPaginationPodcast] = useState([]);
  const [positionPage, setPositionPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/podcast').catch(error => {
        console.log(error.toJSON());
      });
      setPodcastsList(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setNbPodcasts(podcastsList.length);
    const nbPages = Math.ceil(podcastsList.length / 9);
    setPaginationPodcast(Array.from(Array(nbPages).keys()));
  }, [podcastsList]);

  const startSlicePagination = positionPage === 1 ? 0 : positionPage * 9 - 9;
  const endSlicePagination = 9 * positionPage;
  const lastIndex = paginationPodcast.slice(-1)[0];

  return (
    <div>
      <Container maxWidth="lg">
        <AdvancedSearchBar setPodcastsList={setPodcastsList} podcastsList={podcastsList} />

        <Grid container spacing={5}>
          {podcastsList.slice(startSlicePagination, endSlicePagination).map(podcast => {
            return (
              <Grid item xs={12} md={6} lg={4}>
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
        <div className="container-pagination">
          <button
            disabled={positionPage === 1 ? true : false}
            type="button"
            className="pagination-ro"
            onClick={() => setPositionPage(positionPage - 1)}
          >
            Précédant
          </button>
          {paginationPodcast.map(pagination => {
            if (pagination <= 3) {
              while (pagination <= 3) {
                if (pagination === 3) {
                  return (
                    <div className="group">
                      <p className="dotsPagination">...</p>

                      <button
                        type="button"
                        className={
                          positionPage - 1 === lastIndex ? 'pagination-ro active' : 'pagination-ro'
                        }
                        onClick={() => setPositionPage(lastIndex + 1)}
                      >
                        {lastIndex + 1}
                      </button>
                    </div>
                  );
                }

                return (
                  <button
                    type="button"
                    className={
                      positionPage - 1 === pagination ? 'pagination-ro active' : 'pagination-ro'
                    }
                    onClick={() => setPositionPage(pagination + 1)}
                  >
                    {pagination + 1}
                  </button>
                );
              }
            }
          })}
          <button
            type="button"
            className="pagination-ro"
            onClick={() => setPositionPage(positionPage + 1)}
            disabled={positionPage - 1 === lastIndex ? true : false}
          >
            Suivant
          </button>
        </div>
      </Container>
    </div>
  );
};

export default PodcastsList;
