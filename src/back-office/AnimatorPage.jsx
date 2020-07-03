import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AnimatorPostForm from './AnimatorPostForm';

const AnimatorPage = () => {
  return (
    <div>
      <>
        <Container>
          <Paper elevation={2}>
            <AnimatorPostForm />
          </Paper>
        </Container>
      </>
    </div>
  );
};

AnimatorPage.propTypes = {};

export default AnimatorPage;
