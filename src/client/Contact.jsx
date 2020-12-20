import React from 'react';
import { useForm } from 'react-hook-form';
import axios from '../helpers/axios';
import './Contact.scss';
import { TextField, Box, Grid, Button } from '@material-ui/core';

const Contact = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    const dataForms = {
      ...data
    };

    axios
      .post('/Contact', dataForms)
      .then(res => {
        alert(`Le Contact a bien été créée.`);
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur concernant l'ajout d'un Contact' ${e.message}`);
      });
  };

  return (
    <Box p={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              name="sender"
              inputRef={register}
              id="outlined-basic"
              label="Votre email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              name="subject"
              inputRef={register}
              id="outlined-basic"
              label="Nom"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              inputRef={register}
              id="outlined-basic"
              multiline
              rows={4}
              label="Message"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Contact;
