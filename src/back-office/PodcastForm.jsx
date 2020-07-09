import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as yup from 'yup';
import axios from 'axios';
import './admin.scss';
import { useForm, Controller } from 'react-hook-form';

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

const PodcastForm = props => {
  const { updateMode, valueToUpdate, podcastInfo, setPodcastInfo } = props;

  //   let {podcast_title} = valueToUpdate.podcast_title

  // const { podcast_title } = valueToUpdate;

  // Input validation form
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

  // Get Program request
  const [animatorHasPodcast, setAnimatorHasPodcast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/program').catch(function(error) {
        console.log(error.toJSON());
      });
      setAnimatorHasPodcast(result.data);
    };
    fetchData('animatorHasPodcast, ', animatorHasPodcast);
  }, []);

  console.log();

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

  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  // animator id
  const handleChange = event => {
    const animatorId = event.target.value;
    setPersonName(animatorId);

    setPodcastInfo({ ...podcastInfo, animatorId: animatorId });
  };

  console.log(personName);

  const handleSubmit = event => {
    // Submit - create a podcast
    if (!updateMode) {
      const formDate = podcastInfo.podcast_creation_date;
      const podcast_creation_date = moment(formDate).format('yyyy-MM-DD HH:mm:ss');
      const dataForms = {
        ...podcastInfo,
        podcast_creation_date,
        ro_animator_animator_id: personName
      };

      console.log(`envois `, dataForms);

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

      event.preventDefault();
    } else if (updateMode) {
      // Submit - update a podcast
      const formDate = podcastInfo.podcast_creation_date;
      const podcast_creation_date = moment(formDate).format('yyyy-MM-DD HH:mm:ss');
      const dataForms = {
        ...podcastInfo,
        podcast_creation_date,
        ro_animator_animator_id: personName
      };

      console.log(`envois `, dataForms);

      axios
        .put(`/podcast/${podcastInfo.podcast_id}`, dataForms)
        .then(res => res.data)
        .then(res => {
          alert(`Le podcast a bien été modifié dans la base de données`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur concernant la modification  du podcast ${e}`);
        });
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            key="podcast_title"
            name="podcast_title"
            id="outlined-basic"
            label="Titre du podcast"
            variant="outlined"
            fullWidth
            value={podcastInfo.podcast_title ? podcastInfo.podcast_title : ''}
            onChange={e => setPodcastInfo({ ...podcastInfo, podcast_title: e.target.value })}
          />
          {/* {errors.podcast_title && <p className="alert-form">{errors.podcast_title.message}</p>} */}
        </Grid>
        <Grid item xs={6}>
          <TextField
            key="podcast_mp3"
            name="podcast_mp3"
            type="text"
            label="Url du pocast"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            value={podcastInfo.podcast_mp3 ? podcastInfo.podcast_mp3 : ''}
            onChange={e => setPodcastInfo({ ...podcastInfo, podcast_mp3: e.target.value })}
          />
          {/* {errors.podcast_mp3 && <p className="alert-form">{errors.podcast_mp3.message}</p>} */}
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="podcast_description"
            id="outlined-multiline-static"
            label="Description du podcast"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={podcastInfo.podcast_description ? podcastInfo.podcast_description : ''}
            onChange={e => setPodcastInfo({ ...podcastInfo, podcast_description: e.target.value })}
          />
          {/* {errors.podcast_description && (
            <p className="alert-form">{errors.podcast_description.message}</p>
          )} */}
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="podcast_duration"
            id="outlined-basic"
            label="Durée (en minute)"
            variant="outlined"
            fullWidth
            value={podcastInfo.podcast_duration ? podcastInfo.podcast_duration : ''}
            onChange={e => setPodcastInfo({ ...podcastInfo, podcast_duration: e.target.value })}
          />
          {/* {errors.podcast_duration && (
            <p className="alert-form">{errors.podcast_duration.message}</p>
          )} */}
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="podcast_image"
            type="text"
            label="Url de l'image"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            value={podcastInfo.podcast_image ? podcastInfo.podcast_image : ''}
            onChange={e => setPodcastInfo({ ...podcastInfo, podcast_image: e.target.value })}
          />
          {/* {errors.podcast_image && <p className="alert-form">{errors.podcast_image.message}</p>} */}
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" className="MuiFormControl-fullWidth">
            <InputLabel id="demo-simple-select-outlined-label" fullWidth>
              Programme
            </InputLabel>

            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Programme"
              name="ro_program_program_id"
              value={podcastInfo.ro_program_program_id ? podcastInfo.ro_program_program_id : 0}
              onChange={e =>
                setPodcastInfo({ ...podcastInfo, ro_program_program_id: e.target.value })
              }
            >
              {programs.map(program => {
                return <MenuItem value={program.program_id}>{program.program_title}</MenuItem>;
              })}
            </Select>
          </FormControl>
          {/* {errors.ro_program_program_id && (
            <p className="alert-form">{errors.ro_program_program_id.message}</p>
          )} */}
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" className="MuiFormControl-fullWidth">
            <InputLabel id="demo-simple-select-outlined-label" fullWidth>
              Catégorie
            </InputLabel>

            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Catégorie"
              name="ro_category_category_id"
              value={podcastInfo.ro_category_category_id ? podcastInfo.ro_category_category_id : 0}
              onChange={e =>
                setPodcastInfo({ ...podcastInfo, ro_category_category_id: e.target.value })
              }
            >
              {categorys.map(category => {
                return <MenuItem value={category.category_id}>{category.category_name}</MenuItem>;
              })}
            </Select>
          </FormControl>

          {/* {errors.ro_category_category_id && (
            <p className="alert-form">{errors.ro_category_category_id.message}</p>
          )} */}
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label" name="animator_id">
              Animateurs
            </InputLabel>
            <Select
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
                    ' ' +
                    animator.animator_lastname}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            label="Date de diffusion"
            type="datetime-local"
            name="podcast_creation_date"
            value={podcastInfo.podcast_creation_date ? podcastInfo.podcast_creation_date : 0}
            onChange={e =>
              setPodcastInfo({ ...podcastInfo, podcast_creation_date: e.target.value })
            }
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />

          {/* {errors.podcast_creation_date && (
            <p className="alert-form">{errors.podcast_creation_date.message}</p>
          )} */}
        </Grid>
        {/* <Grid item xs={6}>
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
        </Grid> */}

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            {updateMode ? 'Mettre à jours le podcast' : 'Créer le podcast'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PodcastForm;
