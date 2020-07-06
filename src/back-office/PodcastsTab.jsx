import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const PodcastsTab = props => {
  const classes = useStyles();

  const [podcasts, setPodcasts] = useState([]);
  const [nbPodcasts, setNbPodcasts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/podcast').catch(function(error) {
        console.log(error.toJSON());
      });
      setPodcasts(result.data);
      setNbPodcasts(result.data.length);
    };
    fetchData();
  }, []);

  // Delete Podcast
  const DeletePodcast = id => {
    console.log(id);
    axios.delete(`/podcast/${id}`).then(response => {
      console.log(`response`, response);
    });
  };

  return (
    <Box mx="auto" mt={5}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Titre</TableCell>
              <TableCell align="center">Date de mise en ligne</TableCell>
              <TableCell align="center">Mettre à jours</TableCell>
              <TableCell align="center">Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {podcasts.map(podcast => (
              <TableRow key={podcast.podcast_title}>
                <TableCell component="th" scope="row">
                  {podcast.podcast_id}
                </TableCell>
                <TableCell align="center">
                  <div
                    className="coverPodcast"
                    style={{
                      backgroundImage: `url(${
                        podcast.podcast_image
                          ? podcast.podcast_image
                          : '/radio-occitanie-default.jpg'
                      })`
                    }}
                  />
                </TableCell>
                <TableCell align="center">{podcast.podcast_title}</TableCell>

                <TableCell align="center">{podcast.podcast_creation_date}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => DeletePodcast(podcast.podcast_id)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="edit" className={classes.margin}>
                    <EditIcon fontSize="large" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PodcastsTab;

// podcast_creation_date: "2020-07-05T08:04:56.000Z"
// podcast_description: "sdggds"
// podcast_duration: "sdgsdg"
// podcast_id: 4
// podcast_image: null
// podcast_mp3: "sf"
// podcast_title: "aaa"
// ro_category_category_id: null
// ro_program_program_id: 1
