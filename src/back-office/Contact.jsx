import React from 'react';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

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
    console.log(dataForms);
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              name="sender"
              inputRef={register}
              id="outlined-basic"
              label="your_email"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="destination"
              inputRef={register}
              id="outlined-basic"
              label="mail"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="subject"
              inputRef={register}
              id="outlined-basic"
              label="Nom du Contact"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="message"
              inputRef={register}
              id="outlined-basic"
              label="message"
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
