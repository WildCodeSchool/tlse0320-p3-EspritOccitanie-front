import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import ProgramCard from './ProgramCard';
import AdvancedSearchBar from './AdvancedSearchBar';
import './title.scss';

const ProgramList = props => {
  const { programsList } = props;

  return (
    <div>
      <div>
        <Container maxWidth="lg">
          {/* <AdvancedSearchBar setProgramsList={setProgramsList} programsList={programsList} /> */}

          <Grid container spacing={5}>
            {programsList.map(program => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <ProgramCard program={program} />
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
