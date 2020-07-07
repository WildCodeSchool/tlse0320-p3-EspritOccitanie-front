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
  const { setUpdateMode, setPodcastIdToUpdate, podcasts } = props;
  const classes = useStyles();

  // Delete Podcast
  const DeletePodcast = id => {
    axios.delete(`/podcast/${id}`).then(response => {});
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
              <TableCell align="center">Supprimer</TableCell>
              <TableCell align="center">Mettre à jours</TableCell>
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
                  <IconButton
                    aria-label="edit"
                    className={classes.margin}
                    onClick={() => {
                      setPodcastIdToUpdate(podcast.podcast_id);
                      setUpdateMode(true);
                    }}
                  >
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
