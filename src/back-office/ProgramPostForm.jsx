/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
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

const ProgramPostForm = props => {
  const { updateMode, programIdToUpdate } = props;

  // Get Category request
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/category').catch(error => {
        return console.log(error.toJSON());
      });
      return setCategorys(result.data);
    };
    fetchData();
  }, []);

  // Get Animator request
  const [animators, setAnimators] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/animator').catch(error => {
        return console.log(error.toJSON());
      });
      return setAnimators(result.data);
    };
    fetchData();
  }, []);

  const { handleSubmit, register, control } = useForm();
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    const animatorId = event.target.value;
    console.log(event.target.value);
    setPersonName(animatorId);
  };

  const onSubmit = data => {
    // create a program
    if (!updateMode) {
      const dataForms = {
        ...data,
        ro_animator_animator_id: personName
      };
      axios
        .post('/program', dataForms)
        .then(res => res.data)
        .then(res => {
          alert(`L'émission a bien été créée`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur concernant l'ajout de l'émission`);
        });
    } else if (updateMode) {
      // update program
      const dataForms = {
        ...data,
        ro_animator_animator_id: personName
      };
      axios
        .put(`/program/${programIdToUpdate}`, dataForms)
        .then(res => res.data)
        .then(res => {
          alert(`L'émission est modifiée avec succès`);
        })
        .catch(e => {
          console.error(e);
          alert(`Erreur concernant la modification  de l'émission ${e}`);
        });
    }
  };

  return (
    <Box p={2} bgcolor="background.paper" display="flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              name="program_title"
              inputRef={register}
              id="outlined-basic"
              label="Titre de l'émission"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="program_description"
              inputRef={register}
              id="outlined-multiline-static"
              label="Description de l'émission"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="program_image"
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
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-chip-label">Animateurs</InputLabel>
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
                  <MenuItem key={animator.animator_id} value={animator.animator_id}>
                    {`${animator.animator_id} - ${animator.animator_firstname} ${animator.animator_lastname}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {updateMode ? "Mettre à jour l'émission" : "Créer l'émission"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ProgramPostForm;
