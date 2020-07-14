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

  const [animatorSelectedProg, handleAnimatorSelectedProg] = useState('');
  const [categorySelectedProg, handleCategorySelectedProg] = useState('');

  const url = window.location.href.split('/');
  const keyword = url[url.length - 1];

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
    if (url === 'podcasts') {
      const fetchData = async () => {
        const result3 = await axios.get('/program').catch(error => {
          console.log(error.toJSON());
        });
        setProgramsList(result3.data);
      };
      fetchData();
    }
  }, []);

  // get podcasts when program is selected
  useEffect(() => {
    if (programSelected) {
      const fetchData = async () => {
        const res = await axios.get(`/podcast?program=${programSelected}`).catch(error => {
          console.log(error.toJSON());
        });
        setPodcastsList(res.data);
      };
      fetchData();
    }
  }, [programSelected]);

  // get podcasts when animator is selected
  useEffect(() => {
    if (animatorSelected) {
      return axios
        .get(`/podcast?animator=${animatorSelected}`)
        .then(res => res.data)
        .then(res => setPodcastsList(res));
    }
  }, [animatorSelected]);

  // get podcasts when category is selected
  useEffect(() => {
    if (categorySelected) {
      axios
        .get(`/podcast?categorie=${categorySelected}`)
        .then(res => res.data)
        .then(res => setPodcastsList(res));
    }
  }, [categorySelected]);

  // get programs when category is selected
  useEffect(() => {
    if (categorySelectedProg) {
      return axios
        .get(`/program?categorie=${categorySelectedProg}`)
        .then(res => res.data)
        .then(res => console.log(res));
    }
  }, [categorySelectedProg]);

  // get programs when animator is selected
  useEffect(() => {
    if (animatorSelectedProg) {
      axios
        .get(`/program?animator=${animatorSelectedProg}`)
        .then(res => res.data)
        .then(res => setProgramsList(res));
    }
  }, [animatorSelectedProg]);

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
                animatorSelectedProg={animatorSelectedProg}
                handleAnimatorSelectedProg={handleAnimatorSelectedProg}
                categorySelectedProg={categorySelectedProg}
                handleCategorySelectedProg={handleCategorySelectedProg}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AdvancedSearchBar;
