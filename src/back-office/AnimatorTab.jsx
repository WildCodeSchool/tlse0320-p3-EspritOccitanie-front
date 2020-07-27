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

const AnimatorTab = props => {
  const {
    setUpdateMode,
    animatorIdToUpdate,
    setAnimatorIdToUpdate,
    animatorsData,
    setAnimatorsData
  } = props;

  const classes = useStyles();

  // Delete Animator
  const DeleteAnimator = (id, firstname, lastname) => {
    const confirm = window.confirm(`Êtes-vous sûr de vouloir supprimer l'animateur/animatrice : ${firstname} ${lastname} ? `)
    if (confirm) {
      axios.delete(`/animator/${id}`).then((res) => {
        if(window.confirm('Animateur/animatrice supprimé(e) avec succès !')){
          document.location.reload(true);
        } else {
          document.location.reload(true);
        }
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
              <TableCell align="center">Nom</TableCell>
              <TableCell align="center">Prénom</TableCell>
              <TableCell align="center">Supprimer</TableCell>
              <TableCell align="center">Mettre à jour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animatorsData.map(animator => (
              <TableRow key={animator.animator_id}>
                <TableCell component="th" scope="row">
                  {animator.animator_id}
                </TableCell>
                <TableCell align="center">
                  <div
                    className="coverAnimator"
                    style={{
                      backgroundImage: `url(${
                        animator.animator_image
                          ? animator.animator_image
                          : '/radio-occitanie-default.jpg'
                        })`
                    }}
                  />
                </TableCell>
                <TableCell align="center">{animator.animator_firstname}</TableCell>

                <TableCell align="center">{animator.animator_lastname}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => DeleteAnimator(animator.animator_id, animator.animator_lastname, animator.animator_firstname)}
                  >
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="edit"
                    className={classes.margin}
                    onClick={() => {
                      setAnimatorIdToUpdate(animator.animator_id);
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

export default AnimatorTab;
