import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './admin.scss';
import PodcastForm from './PodcastForm';
import { Box } from '@material-ui/core';

const PodcastsPostForm = props => {
  const {
    updateMode,
    podcastIdToUpdate,
    valueToUpdate,
    podcasts,
    podcastInfo,
    setPodcastInfo
  } = props;

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      {updateMode ? (
        <PodcastForm
          valueToUpdate={valueToUpdate}
          updateMode={updateMode}
          podcastInfo={podcastInfo}
          setPodcastInfo={setPodcastInfo}
        />
      ) : (
        <PodcastForm
          updateMode={updateMode}
          valueToUpdate={valueToUpdate}
          podcastInfo={podcastInfo}
          setPodcastInfo={setPodcastInfo}
        />
      )}
    </Box>
  );
};

export default PodcastsPostForm;
