/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid } from '@material-ui/core';
import PodcastList from './PodcastsList';
import ProgramList from './ProgramList';
import _ from 'lodash';
import AdvancedSearchSelect from './AdvancedSearchSelect';
import './AdvancedSearch.scss';
import './title.scss';

const PageList = props => {
  const { onPlay, setOnPlay, setIdPodastPlay, idPodastPlay, playerRef, setDataPlayer } = props;
  const [podcastsList, setPodcastsList] = useState([]);
  const [programsList, setProgramsList] = useState([]);
  const [animatorsList, setAnimatorsList] = useState([]);
  const [categorysList, setCategorysList] = useState([]);
  const [programSelected, handleProgramSelected] = useState();
  const [animatorSelected, handleAnimatorSelected] = useState();
  const [categorySelected, handleCategoryelected] = useState();

  const url = window.location.href.split('/');

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

  // get all programs
  useEffect(() => {
    const fetchData = async () => {
      if (url[3] === 'podcasts') {
        const result3 = await axios.get('/program').catch(error => {
          console.log(error.toJSON());
        });
        setProgramsList(result3.data);
      }
    };
    fetchData();
  }, []);

  // get all podcasts
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/podcast').catch(error => {
        console.log(`error Podcaslist axios = `, error.toJSON());
      });
      setPodcastsList(result.data);
    };
    fetchData();
  }, []);

  // filter on podcasts
  useEffect(() => {
    const fetchData = async () => {
      //get podcast when program selected
      const resultProgram = programSelected
        ? await axios.get(`/podcast?program=${programSelected}`).catch(function(error) {
            console.log(error.toJSON());
          })
        : [];
      //get podcast when category selected
      const resultCategory = categorySelected
        ? await axios.get(`/podcast?categorie=${categorySelected}`).catch(function(error) {
            console.log(error.toJSON());
          })
        : [];
      //get podcast when animator selected
      const resultAnimator = animatorSelected
        ? await axios.get(`/podcast?animator=${animatorSelected}`).catch(function(error) {
            console.log(error.toJSON());
          })
        : [];
      // get podcasts when animator, program & category selected
      if (programSelected && animatorSelected && categorySelected) {
        const results = _.intersectionWith(
          resultCategory.data,
          resultAnimator.data,
          resultProgram.data,
          _.isEqual
        );
        setPodcastsList(results);
        // get podcasts if animator & category selected
      } else if (categorySelected && animatorSelected && !programSelected) {
        const results = _.intersectionWith(resultCategory.data, resultAnimator.data, _.isEqual);
        setPodcastsList(results);
        // get podcasts if program & category selected
      } else if (categorySelected && programSelected && !animatorSelected) {
        const results = _.intersectionWith(resultCategory.data, resultProgram.data, _.isEqual);
        setPodcastsList(results);
        // get podcasts if animator & program selected
      } else if (animatorSelected && programSelected && !categorySelected) {
        const results = _.intersectionWith(resultProgram.data, resultAnimator.data, _.isEqual);
        setPodcastsList(results);
        // get podcasts if animator selected
      } else if (animatorSelected && !programSelected && !categorySelected) {
        return setPodcastsList(resultAnimator.data);
        // get podcasts if category selected
      } else if (categorySelected && !animatorSelected && !programSelected) {
        return setPodcastsList(resultCategory.data);
        // get podcasts if program selected
      } else if (programSelected && !animatorSelected && !categorySelected) {
        return setPodcastsList(resultProgram.data);
      }
    };
    fetchData();
  }, [programSelected, animatorSelected, categorySelected]);

  // filter programs
  useEffect(() => {
    const fetchData = async () => {
      // get programs when category selected
      const resultCategory = categorySelected
        ? await axios.get(`/program?categorie=${categorySelected}`).catch(function(error) {
            console.log(error.toJSON());
          })
        : [];
      // get programs when animator selected
      const resultAnimator = animatorSelected
        ? await axios.get(`/program?animator=${animatorSelected}`).catch(function(error) {
            console.log(error.toJSON());
          })
        : [];
      // get programs when category & animator selected
      if (categorySelected && animatorSelected) {
        setProgramsList([]);
        const results = _.intersectionWith(resultCategory.data, resultAnimator.data, _.isEqual);
        setProgramsList(results);
        // get programs if animator selected
      } else if (animatorSelected && !categorySelected) {
        setProgramsList([]);
        return setProgramsList(resultAnimator.data);
        // get programs if category selected
      } else if (categorySelected && !animatorSelected) {
        setProgramsList([]);
        return setProgramsList(resultCategory.data);
      } else {
        const result = await axios.get('/program').catch(error => {
          console.log(error.toJSON());
        });
        setProgramsList(result.data);
      }
    };
    fetchData();
  }, [categorySelected, animatorSelected]);

  return (
    <div>
      <div>
        {url[3] === 'podcasts' ? (
          <section className="title-page">
            <h1>Les Podcasts</h1>
          </section>
        ) : (
          <section className="title-page">
            <h1>Les Émissions</h1>
          </section>
        )}
      </div>
      <div className="filter-bar">
        <AdvancedSearchSelect
          podcastsList={podcastsList}
          programsList={programsList}
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
      <Container>
        <Grid>
          {url[3] === 'emissions' ? (
            <div>
              {programsList.length < 1 ? (
                <h1>Désolé aucun résultat pour cette recherche</h1>
              ) : (
                <div>
                  <ProgramList
                    programsList={programsList}
                    animatorsList={animatorsList}
                    categorysList={categorysList}
                    animatorSelected={animatorSelected}
                    categorySelected={categorySelected}
                  />
                </div>
              )}
            </div>
          ) : (
            <div>
              {podcastsList.length < 1 ? (
                <h1>Désolé aucun résultat pour cette recherche</h1>
              ) : (
                <div>
                  <PodcastList
                    podcastsList={podcastsList}
                    programsList={programsList}
                    animatorsList={animatorsList}
                    categorysList={categorysList}
                    onPlay={onPlay}
                    setOnPlay={setOnPlay}
                    setIdPodastPlay={setIdPodastPlay}
                    idPodastPlay={idPodastPlay}
                    playerRef={playerRef}
                    setDataPlayer={setDataPlayer}
                  />
                </div>
              )}
            </div>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default PageList;
