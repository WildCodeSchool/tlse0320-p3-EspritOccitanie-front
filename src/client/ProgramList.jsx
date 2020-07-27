import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ProgramCard from './ProgramCard';
import './title.scss';

const ProgramList = props => {
  const { programsList, animatorSelected, categorySelected } = props;

  return (
    <div>
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {programsList.map(program => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <ProgramCard program={program}
                  animatorSelected={animatorSelected} 
                  categorySelected={categorySelected} 
                  />
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
