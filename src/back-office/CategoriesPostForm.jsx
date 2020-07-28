import React from 'react';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

import { TextField, Box, Grid, Button } from '@material-ui/core';

const CategoriesPostForm = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    const dataForms = {
      ...data
    };

    axios
      .post('/category', dataForms)
      .then(res => res.data)
      .then(res => {
        if (window.confirm(`La catégorie a bien été créée.`)) {
          document.location.reload(true);
        } else {
          document.location.reload(true);
        }
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur concernant l'ajout d'une catégorie' ${e.message}`);
      });
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              name="category_name"
              inputRef={register}
              id="outlined-basic"
              label="Nom de la catégorie"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Créer la catégorie
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CategoriesPostForm;
