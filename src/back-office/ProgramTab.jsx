import React from 'react';
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
import './admin.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const PodcastsTab = props => {
  const { setUpdateMode, setProgramIdToUpdate, programsData } = props;
  const classes = useStyles();

  // Delete Podcast
  const DeletePodcast = (id, title) => {
    const confirm = window.confirm(`Êtes-vous sûr de vouloir supprimer l'émission : ${title} ? `);
    if (confirm) {
      axios.delete(`/program/${id}`).then(res => {
        alert('Emission supprimée avec succès');
      });
    }
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
              <TableCell align="center">Supprimer</TableCell>
              <TableCell align="center">Mettre à jour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {programsData.map(program => (
              <TableRow key={program.program_title}>
                <TableCell component="th" scope="row">
                  {program.program_id}
                </TableCell>
                <TableCell align="center">
                  <div
                    className="coverProgram"
                    style={{
                      backgroundImage: `url(${
                        program.program_image
                          ? program.program_image
                          : '/radio-occitanie-default.jpg'
                      })`
                    }}
                  />
                </TableCell>
                <TableCell align="center">{program.program_title}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => DeletePodcast(program.program_id, program.program_title)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    className={classes.margin}
                    onClick={() => {
                      setProgramIdToUpdate(program.program_id);
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
