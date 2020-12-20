import React, { useState, useEffect } from 'react';
import axios from '../helpers/axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PodcastsPostForm from './PodcastsPostForm';
import PodcastsTab from './PodcastsTab';

const PodcastsPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [podcastIdToUpdate, setPodcastIdToUpdate] = useState(null);
  const [podcasts, setPodcasts] = useState([]);
  const [podcastInfo, setPodcastInfo] = useState({
    podcast_creation_date: '',
    podcast_description: '',
    podcast_duration: '',
    podcast_id: null,
    podcast_image: '',
    podcast_mp3: '',
    podcast_title: '',
    ro_category_category_id: null,
    ro_program_program_id: null
  });

  // get all podcasts
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/podcast').catch(function(error) {
        console.log(error.toJSON());
      });
      setPodcasts(result.data);
    };
    fetchData();
  }, []);

  // set data podcasts to default value for update
  useEffect(() => {
    if (updateMode) {
      const values = podcasts.filter(podcast => podcast.podcast_id === podcastIdToUpdate)[0];
      setPodcastInfo(values);
    }
  }, [podcastIdToUpdate]);

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
