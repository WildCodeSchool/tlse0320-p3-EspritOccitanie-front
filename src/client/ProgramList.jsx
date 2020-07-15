import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import ProgramCard from './ProgramCard';
import AdvancedSearchBar from './AdvancedSearchBar';

const ProgramList = props => {
  const { setProgramsList, programsList } = props;
  // Get podcasts request
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/program').catch(function(error) {
        // console.log(`error axion program list = `, error.toJSON());
      });

      setProgramsList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper-about">
      <section className="full-blue header-title">
        <h1>Nos Emissions</h1>
      </section>
      <div>
        <Container maxWidth="lg">
          <AdvancedSearchBar setProgramsList={setProgramsList} programsList={programsList} />

          <Grid container spacing={3}>
            {programsList.map(program => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <ProgramCard dataPrograms={program} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ProgramList;
