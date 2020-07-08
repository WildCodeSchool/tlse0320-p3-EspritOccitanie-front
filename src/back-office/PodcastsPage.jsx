import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PodcastsPostForm from './PodcastsPostForm';
import PodcastsTab from './PodcastsTab';

const PodcastsPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [podcastIdToUpdate, setPodcastIdToUpdate] = useState(null);
  const [podcasts, setPodcasts] = useState([]);
  const [podcastInfo, setPodcastInfo] = useState({ podcast_title: 'toto' });

  console.log(podcastInfo.podcast_title);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/podcast').catch(function(error) {
        console.log(error.toJSON());
      });
      setPodcasts(result.data);
    };
    fetchData();
  }, []);

  // if (updateMode) {
  //   const values = podcasts.filter(podcast => podcast.podcast_id === podcastIdToUpdate)[0];
  //   setPodcastInfo(values);
  // }

  return (
    <div className="admin-podcast">
      <Container>
        <Paper elevation={2}>
          <PodcastsPostForm
            updateMode={updateMode}
            podcastIdToUpdate={podcastIdToUpdate}
            podcasts={podcasts}
            podcastInfo={podcastInfo}
            setPodcastInfo={setPodcastInfo}
          />
        </Paper>

        <Paper elevation={2}>
          <PodcastsTab
            setUpdateMode={setUpdateMode}
            podcastIdToUpdate={podcastIdToUpdate}
            setPodcastIdToUpdate={setPodcastIdToUpdate}
            podcasts={podcasts}
            setPodcastInfo={setPodcastInfo}
          />
        </Paper>
      </Container>
    </div>
  );
};

PodcastsPage.propTypes = {};

export default PodcastsPage;
