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
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const PodcastsTab = props => {
  const { categoriesList } = props;

  const classes = useStyles();

  // Delete Podcast
  const DeleteCategories = (id, name) => {
    const confirm = window.confirm(
    `Êtes-vous sûr de vouloir supprimer la catégorie : ${name} ? 
    Attention, toutes les émissions et/ou podcasts assocciés n'aurons plus de catégorie si vous validez !`)
    if (confirm) {
      axios.delete(`/category/${id}`).then((res) => {
        if(window.confirm('Catégorie supprimée avec succès !')){
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
              <TableCell align="center">Catégories</TableCell>
              <TableCell align="center">Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoriesList.map(categories => (
              <TableRow key={categories.category_name}>
                <TableCell component="th" scope="row">
                  {categories.category_id}
                </TableCell>
                <TableCell align="center">{categories.category_name}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => DeleteCategories(categories.category_id, categories.category_name)}
                  >
                    <DeleteIcon fontSize="large" />
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
