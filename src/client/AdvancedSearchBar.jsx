/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdvancedSearch.scss';

import AdvancedSearchPodcast from './AdvancedSearchPodcast';

const AdvancedSearchBar = props => {
  const { podcastsList, setPodcastsList, setProgramsList, programsList } = props;

  const [animatorsList, setAnimatorsList] = useState([]);
  const [categorysList, setCategorysList] = useState([]);
  const [programSelected, handleProgramSelected] = useState();
  const [animatorSelected, handleAnimatorSelected] = useState();
  const [categorySelected, handleCategoryelected] = useState();

  const [animatorSelectedProg, handleAnimatorSelectedProg] = useState();
  const [categorySelectedProg, handleCategorySelectedProg] = useState();

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

  // get program list
  useEffect(() => {
    if (programSelected && url[3] === 'podcasts') {
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
    if (programSelected && url[3] === 'podcasts') {
      const fetchData = async () => {
        const res = await axios.get(`/podcast?program=${programSelected}`).catch(error => {
          console.log(error.toJSON());
        });
        setPodcastsList(res.data);
      };
      fetchData();
    }
  }, [programSelected]);

  // get programs when animator is selected
  useEffect(() => {
    if (animatorSelected && url[3] === 'podcasts') {
      const fetchData = async () => {
        const result = await axios
          .get(`/podcast?animator=${animatorSelected}`)
          .catch(function(error) {
            console.log(error.toJSON());
          });

        return setPodcastsList(result.data);
      };
      fetchData();
    }
  }, [animatorSelected]);

  // get podcasts when category is selected
  useEffect(() => {
    if (categorySelectedProg !== undefined && url[3] === 'podcasts') {
      const fetchData = async () => {
        const result = await axios
          .get(`/podcast?categorie=${categorySelected}`)
          .catch(function(error) {
            console.log(error.toJSON());
          });

        return setPodcastsList(result.data);
      };
      fetchData();
    }
  }, [categorySelectedProg]);

  // get programs when category is selected
  useEffect(() => {
    if (categorySelectedProg !== undefined && url[3] === 'emissions') {
      const fetchData = async () => {
        const result = await axios
          .get(`/program?categorie=${categorySelectedProg}`)
          .catch(function(error) {
            console.log(error.toJSON());
          });

        return setProgramsList(result.data);
      };
      fetchData();
    }
  }, [categorySelectedProg]);

  // get podcasts when category is selected
  useEffect(() => {
    console.log(categorySelected);

    if (categorySelected !== undefined && url[3] === 'podcasts') {
      const fetchData = async () => {
        const result = await axios
          .get(`/podcast?categorie=${categorySelected}`)
          .catch(function(error) {
            console.log(error.toJSON());
          });

        return setPodcastsList(result.data);
      };
      fetchData();
    }
  }, [categorySelected]);

  // get programs when animator is selected
  useEffect(() => {
    if (animatorSelected !== undefined && url[3] === 'emissions') {
      const fetchData = async () => {
        const result = await axios
          .get(`/program?animator=${animatorSelected}`)
          .catch(function(error) {
            console.log(error.toJSON());
          });

        return setProgramsList(result.data);
      };
      fetchData();
    }
  }, [animatorSelected]);

  return (
    <div className="filter-bar">
      <div>
        <AdvancedSearchPodcast
          podcastsList={podcastsList}
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
    </div>
  );
};

export default AdvancedSearchBar;
