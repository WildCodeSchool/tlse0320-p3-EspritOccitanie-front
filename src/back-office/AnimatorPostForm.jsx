import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import axios from 'axios';

import {
  Input,
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormControl,
  Chip
} from '@material-ui/core';

const AnimatorPostForm = () => {
  const { handleSubmit, register, control } = useForm();

  const onSubmit = data => {
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
              Créer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AnimatorPostForm;
