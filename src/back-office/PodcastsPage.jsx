import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PodcastsPostForm from './PodcastsPostForm';
import PodcastsTab from './PodcastsTab';

const PodcastsPage = () => {
  return (
    <div className="admin-podcast">
      <>
        <Container>
          <Paper elevation={2}>
            <PodcastsPostForm />
          </Paper>

          <Paper elevation={2}>
            <PodcastsTab />
          </Paper>
        </Container>
      </>
    </div>
  );
};

PodcastsPage.propTypes = {};

export default PodcastsPage;
