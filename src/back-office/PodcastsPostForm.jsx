import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    maxWidth: 500
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const PodcastsPostForm = () => {
  //Get Program request
  const [program, setProgram] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/program').catch(function(error) {
        console.log(error.toJSON());
      });
      // setProgram(result.data);
    };
    fetchData();
  }, []);

  //Get Category request
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/category').catch(function(error) {
        console.log(error.toJSON());
      });
      setCategory(result.data);
    };
    fetchData();
  }, []);

  //Get Animator request
  const [animators, setAnimators] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/animator').catch(function(error) {
        console.log(error.toJSON());
      });
      setAnimators(result.data);
    };
    fetchData();
  }, []);

  console.log(animator);

  const { handleSubmit, register, control } = useForm();
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const names = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard'];

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const onSubmit = data => {
    let dataForms = { ...data, ro_animator_animator_id: personName };
    console.log(JSON.stringify(dataForms));
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
              type="text"
              label="Url du pocast"
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
              type="text"
              label="Url de l'image"
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

              <Controller
                as={
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Programme"
                  >
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                }
                name="ro_program_program_id"
                control={control}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" className="MuiFormControl-fullWidth">
              <InputLabel id="demo-simple-select-outlined-label" fullWidth>
                Catégorie
              </InputLabel>

              <Controller
                as={
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Catégorie"
                  >
                    <MenuItem value={1}>Ecologie</MenuItem>
                    <MenuItem value={2}>Economie</MenuItem>
                    <MenuItem value={3}>blabalba</MenuItem>
                  </Select>
                }
                name="ro_category_category_id"
                control={control}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
              <Select
                inputRef={register}
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip key={value} label={value} className={classes.chip} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {animators.map(animator => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Controller
              as={ReactDatePicker}
              control={control}
              className="MuiFormControl-fullWidth"
              valueName="selected" // DateSelect value's name is selected
              onChange={([selected]) => selected}
              name="podcast_creation_date"
              placeholderText="Date de création"
              variant="outlined"
            />
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
