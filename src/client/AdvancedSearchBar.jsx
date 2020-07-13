/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Container, Grid } from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import AdvancedSearchPodcast from './AdvancedSearchPodcast';

const AdvancedSearchBar = props => {
  const { podcastsList, setPodcastsList } = props;

  const [programsList, setProgramsList] = useState([]);
  const [animatorsList, setAnimatorsList] = useState([]);
  const [categorysList, setCategorysList] = useState([]);
  const [programSelected, handleProgramSelected] = useState('');
  const [animatorSelected, handleAnimatorSelected] = useState('');
  const [categorySelected, handleCategoryelected] = useState('');

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
      setPodcastsList(podcastProgram.data);
    };
    fetchData();
  }, [programSelected]);

  // get podcasts when animator is selected
  useEffect(() => {
    axios
      .get(`/podcast?animator=${animatorSelected}`)
      .then(res => res.data)
      .then(res => setPodcastsList(res));
  }, [animatorSelected]);

  // get podcasts when category is selected
  useEffect(() => {
    axios
      .get(`/podcast?program=${categorySelected}`)
      .then(res => res.data)
      .then(res => setPodcastsList(res));
  }, [categorySelected]);

  return (
    <div>
      <Container>
        <Grid>
          <Grid>
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
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdvancedSearchBar;
