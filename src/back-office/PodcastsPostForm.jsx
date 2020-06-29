import React from 'react';
import { useForm } from 'react-hook-form';

import {
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormControl
} from '@material-ui/core';

const PodcastsPostForm = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = data => {
    console.log(JSON.stringify(data));
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              name="podcast_title"
              inputRef={register}
              id="outlined-basic"
              label="Titre du podcast"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="podcast_mp3"
              type="file"
              inputRef={register}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="podcast_description"
              inputRef={register}
              id="outlined-multiline-static"
              label="Description du podcast"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="podcast_duration"
              inputRef={register}
              id="outlined-basic"
              label="Durée (en minute)"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="podcast_image"
              type="file"
              inputRef={register}
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="outlined" className="MuiFormControl-fullWidth">
              <InputLabel id="demo-simple-select-outlined-label" fullWidth>
                Programme
              </InputLabel>
              <Select
                name="ro_category_category_id"
                inputRef={register}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Programme"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Economie</MenuItem>
                <MenuItem value={2}>Ecologie</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl variant="outlined" className="MuiFormControl-fullWidth">
              <InputLabel id="demo-simple-select-outlined-label" fullWidth>
                Catégorie
              </InputLabel>
              <Select
                name="ro_program_program_id"
                inputRef={register}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Catégorie"
                fullWidth
              >
                <MenuItem value="">
                  <em>Vide</em>
                </MenuItem>
                <MenuItem value={1}>Oiseau Blanc</MenuItem>
                <MenuItem value={2}>Toto</MenuItem>
                <MenuItem value={3}>Titi</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Créer le podcast
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PodcastsPostForm;
