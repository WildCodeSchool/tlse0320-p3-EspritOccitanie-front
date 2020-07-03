import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ProgramPostForm from './ProgramPostForm';

const ProgramPage = () => {
  return (
    <div>
      <>
        <Container>
          <Paper elevation={2}>
            <ProgramPostForm />
          </Paper>
        </Container>
      </>
    </div>
  );
};

ProgramPage.propTypes = {};

export default ProgramPage;
