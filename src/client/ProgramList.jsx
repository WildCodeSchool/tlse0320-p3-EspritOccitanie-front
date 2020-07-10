import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import ProgramCard from './ProgramCard';

const ProgramList = () => {
  // Get podcasts request
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line func-names
      const result = await axios.get('/program').catch(function(error) {
        // eslint-disable-next-line no-console
        console.log(error.toJSON());
      });
      setPrograms(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {programs.map(program => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <ProgramCard dataPrograms={program} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ProgramList;
