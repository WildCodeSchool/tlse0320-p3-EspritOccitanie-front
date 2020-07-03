import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as yup from 'yup';
import axios from 'axios';
import './admin.scss';

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
  // Get Program request
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/program').catch(function(error) {
        console.log(error.toJSON());
      });
      setPrograms(result.data);
    };
    fetchData();
  }, []);

  // Get Category request
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/category').catch(function(error) {
        console.log(error.toJSON());
      });
      setCategorys(result.data);
    };
    fetchData();
  }, []);

  // Get Animator request
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

  const schema = yup.object().shape({
    podcast_title: yup
      .string()
      .min(4, 'minimun 4 caractères')
      .required(),
    podcast_mp3: yup.string().required('le champ est requis'),
    ro_category_category_id: yup.string().required('le champ est requis'),
    podcast_creation_date: yup.string().required('le champ est requis'),
    ro_program_program_id: yup.string().required('le champ est requis'),
    podcast_duration: yup.string().required('le champ est requis'),
    animator_id: yup
      .array()
      .max(1, 'Pick at least 3 tags')
      .of(
        yup.object().shape({
          label: yup.string().required(),
          value: yup.string().required()
        })
      )
  });

  const { handleSubmit, register, control, errors } = useForm({ validationSchema: schema });
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    let animatorId = event.target.value;
    setPersonName(animatorId);
  };

  const onSubmit = data => {
    let formDate = data.podcast_creation_date;
    let podcast_creation_date = moment(formDate).format('yyyy-MM-DD HH:mm:ss');

    let dataForms = {
      ...data,
      ro_animator_animator_id: personName
    };

    axios
      .post('/podcast', dataForms)
      .then(res => res.data)
      .then(res => {
        alert(`Le podcast a bien été ajouté dans la base de données`);
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur concernant l'ajout du podcast ${e.message}`);
      });
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
            {errors.podcast_title && <p className="alert-form">{errors.podcast_title.message}</p>}
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
            {errors.podcast_mp3 && <p className="alert-form">{errors.podcast_mp3.message}</p>}
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
            {errors.podcast_description && (
              <p className="alert-form">{errors.podcast_description.message}</p>
            )}
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
            {errors.podcast_duration && (
              <p className="alert-form">{errors.podcast_duration.message}</p>
            )}
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
            {errors.podcast_image && <p className="alert-form">{errors.podcast_image.message}</p>}
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
                    {programs.map(program => {
                      return (
                        <MenuItem value={program.program_id}>{program.program_title}</MenuItem>
                      );
                    })}
                  </Select>
                }
                name="ro_program_program_id"
                control={control}
              />
            </FormControl>
            {errors.ro_program_program_id && (
              <p className="alert-form">{errors.ro_program_program_id.message}</p>
            )}
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
                    {categorys.map(category => {
                      return (
                        <MenuItem value={category.category_id}>{category.category_name}</MenuItem>
                      );
                    })}
                  </Select>
                }
                name="ro_category_category_id"
                control={control}
              />
            </FormControl>

            {errors.ro_category_category_id && (
              <p className="alert-form">{errors.ro_category_category_id.message}</p>
            )}
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label" name="animator_id">
                Animateurs
              </InputLabel>
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
                    {selected.map((value, i) => (
                      <Chip key={value} label={value} className={classes.chip} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {animators.map(animator => (
                  <MenuItem key={animator.animator_id} value={animator.animator_id}>
                    {`${animator.animator_id} - ` +
                      animator.animator_firstname +
                      animator.animator_lastname}
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

            {errors.podcast_creation_date && (
              <p className="alert-form">{errors.podcast_creation_date.message}</p>
            )}
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
