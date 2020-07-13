/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';

import AdvancedSearchPodcast from './AdvancedSearchPodcast';
import PodcastsListResearch from './PodcastsListResearch';

const AdvancedSearchBar = () => {
  const [podcastsList, setPodcastsList] = useState([]);
  const [programsList, setProgramsList] = useState([]);
  const [animatorsList, setAnimatorsList] = useState([]);
  const [categorysList, setCategorysList] = useState([]);
  const [programSelected, handleProgramSelected] = useState('');
  const [animatorSelected, handleAnimatorSelected] = useState('');
  const [categorySelected, handleCategoryelected] = useState('');
  const [podcastHasProgram, setPodcastHasProgram] = useState([]);
  const [podcastHasAnimator, setPodcastHasAnimator] = useState([]);
  const [podcastHasCategory, setPodcastHasCategory] = useState([]);
  const [podcastHasProgramAndAnimator, setPodcastHasProgramAndAnimator] = useState([]);
  const [podcastHasProgramAndCategory, setPodcastHasProgramAndCategory] = useState([]);
  const [podcastHasAnimatorAndCategory, setPodcastHasAnimatorAndCategory] = useState([]);
  const [podcastHasAll, setPodcastHasAll] = useState([]);
  const [buttonResearchSelected, setBRSelected] = useState(1);
  const [paginationPodcast, setPaginationPodcast] = useState([]);
  const [positionPage, setPositionPage] = useState(1);

  // get all podcasts
  useEffect(() => {
    const fetchData = async () => {
      const result4 = await axios.get('/podcast').catch(error => {
        console.log(error.toJSON());
      });
      setPodcastsList(result4.data);
    };
    fetchData();
  }, []);

  // Get category list
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/category').catch(error => {
        console.log(error.toJSON());
      });
      setCategorysList(result.data);
    };
    fetchData();
  }, []);

  // get animator list
  useEffect(() => {
    const fetchData = async () => {
      const result2 = await axios.get('/animator').catch(error => {
        console.log(error.toJSON());
      });
      setAnimatorsList(result2.data);
    };
    fetchData();
  }, []);

  // get program list
  useEffect(() => {
    const fetchData = async () => {
      const result3 = await axios.get('/program').catch(error => {
        console.log(error.toJSON());
      });
      setProgramsList(result3.data);
    };
    fetchData();
  }, []);

  // get podcasts when program is selected
  useEffect(() => {
    const fetchData = async () => {
      const podcastProgram = await axios.get(`/podcast?program=${programSelected}`).catch(error => {
        console.log(error.toJSON());
      });
      setPodcastHasProgram(podcastProgram.data.result);
    };
    fetchData();
  }, [programSelected]);

  // get podcasts when animator is selected
  useEffect(() => {
    axios
      .get(`/podcast?animator=${animatorSelected}`)
      .then(res => res.data)
      .then(res => setPodcastHasAnimator(res.result));
  }, [animatorSelected]);

  // get podcasts when category is selected
  useEffect(() => {
    axios
      .get(`/podcast?program=${categorySelected}`)
      .then(res => res.data)
      .then(res => setPodcastHasCategory(res.result));
  }, [categorySelected]);

  // get podcasts when program and animator are selected
  useEffect(() => {
    const results = _.intersectionWith(podcastHasProgram, podcastHasAnimator, _.isEqual);
    setPodcastHasProgramAndAnimator(results);
  }, [podcastHasProgram, podcastHasAnimator]);

  // get podcasts when program and category are selected
  useEffect(() => {
    const results = _.intersectionWith(podcastHasProgram, podcastHasCategory, _.isEqual);
    setPodcastHasProgramAndCategory(results);
  }, [podcastHasProgram, podcastHasCategory]);

  // get podcasts when animator and category are selected
  useEffect(() => {
    const results = _.intersectionWith(podcastHasAnimator, podcastHasCategory, _.isEqual);
    setPodcastHasAnimatorAndCategory(results);
  }, [podcastHasAnimator, podcastHasCategory]);

  // get podcasts when animator,category and program are selected
  useEffect(() => {
    const results = _.intersectionWith(
      podcastHasProgram,
      podcastHasAnimator,
      podcastHasCategory,
      _.isEqual
    );
    setPodcastHasAll(results);
  }, [podcastHasProgram, podcastHasAnimator, podcastHasCategory]);

  return (
    <div>
      <Container>
        <Grid>
          <Grid>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              active={buttonResearchSelected === 1}
              onClick={() => setBRSelected(1)}
            >
              Podcasts
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              active={buttonResearchSelected === 2}
              onClick={() => setBRSelected(2)}
            >
              Émissions
            </Button>
          </Grid>
          <Grid>
            {buttonResearchSelected === 1 ? (
              <div>
                <div>
                  <AdvancedSearchPodcast
                    programsList={programsList}
                    setProgramsList={setProgramsList}
                    animatorsList={animatorsList}
                    setAnimatorsList={setAnimatorsList}
                    categorysList={categorysList}
                    setCategorysList={setCategorysList}
                    programSelected={programSelected}
                    handleProgramSelected={handleProgramSelected}
                    animatorSelected={animatorSelected}
                    handleAnimatorSelected={handleAnimatorSelected}
                    categorySelected={categorySelected}
                    handleCategoryelected={handleCategoryelected}
                    podcastHasProgram={podcastHasProgram}
                    setPodcastHasProgram={setPodcastHasProgram}
                    podcastHasAnimator={podcastHasAnimator}
                    setPodcastHasAnimator={setPodcastHasAnimator}
                    podcastHasCategory={podcastHasCategory}
                    setPodcastHasCategory={setPodcastHasCategory}
                    podcastHasProgramAndAnimator={podcastHasProgramAndAnimator}
                    setPodcastHasProgramAndAnimator={setPodcastHasProgramAndAnimator}
                    podcastHasProgramAndCategory={podcastHasProgramAndCategory}
                    setPodcastHasProgramAndCategory={setPodcastHasProgramAndCategory}
                    podcastHasAnimatorAndCategory={podcastHasAnimatorAndCategory}
                    setPodcastHasAnimatorAndCategory={setPodcastHasAnimatorAndCategory}
                    podcastHasAll={podcastHasAll}
                    setPodcastHasAll={setPodcastHasAll}
                  />
                </div>
                <div>
                  <PodcastsListResearch
                    programsList={programsList}
                    animatorsList={animatorsList}
                    categorysList={categorysList}
                    programSelected={programSelected}
                    animatorSelected={animatorSelected}
                    categorySelected={categorySelected}
                    podcastHasProgram={podcastHasProgram}
                    podcastHasAnimator={podcastHasAnimator}
                    podcastHasCategory={podcastHasCategory}
                    podcastHasProgramAndAnimator={podcastHasProgramAndAnimator}
                    podcastHasProgramAndCategory={podcastHasProgramAndCategory}
                    podcastHasAnimatorAndCategory={podcastHasAnimatorAndCategory}
                    podcastHasAll={podcastHasAll}
                    podcastsList={podcastsList}
                  />
                </div>
              </div>
            ) : buttonResearchSelected === 2 ? (
              <div>
                <p> Ici recherche</p>
              </div>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdvancedSearchBar;
