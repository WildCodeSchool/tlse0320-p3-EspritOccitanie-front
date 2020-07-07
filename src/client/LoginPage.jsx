/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Box, Grid, Button } from '@material-ui/core';

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    const dataForms = {
      ...data
    };
    axios
      .post('/login', dataForms)
      .then(res => res.data)
      .then(res => console.log(res))
      .catch(e => {
        console.error(e);
        alert(`Erreur authentification' ${e.message}`);
      });
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              name="admin_email"
              inputRef={register}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              name="admin_password"
              inputRef={register}
              id="outlined-basic"
              label="Mot de passe"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Se connecter
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginPage;
