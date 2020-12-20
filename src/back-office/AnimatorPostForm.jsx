import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../helpers/axios';

import { TextField, Box, Grid, Button } from '@material-ui/core';

const AnimatorPostForm = props => {
  const { handleSubmit, register } = useForm();
  const { updateMode, animatorIdToUpdate } = props;

  const onSubmit = data => {
    // create animator
    if (!updateMode) {
      const dataForms = {
        ...data
      };

      axios
        .post('/animator', dataForms)
        .then(res => res.data)
        .then(res => {
          alert(`L'animateur/animatrice est créé`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur concernant l'ajout de l'animateur/animatrice ${e.message}`);
        });
    }

    // update animator
    const dataForms = {
      ...data
    };
    axios
      .put(`/animator/${animatorIdToUpdate}`, dataForms)
      .then(res => res.data)
      .then(res => {
        alert(`Animateur/animatrice modifié(e) avec succès !`);
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur concernant la modification  de l'animateur/animatrice ${e}`);
      });
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              name="animator_firstname"
              inputRef={register}
              id="outlined-basic"
              label="Prénom de l'animateur/animatrice"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="animator_lastname"
              type="text"
              label="Nom de l'animateur/animatrice"
              inputRef={register}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="animator_description"
              inputRef={register}
              id="outlined-multiline-static"
              label="Description de l'animateur/animatrice"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="animator_image"
              inputRef={register}
              id="outlined-basic"
              label="Photo de l'animateur/animatrice"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {updateMode ? "Mettre à jour l'animateur/animatrice" : 'Créer animateur/animatrice'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AnimatorPostForm;
