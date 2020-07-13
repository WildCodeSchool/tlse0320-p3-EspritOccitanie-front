/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const AdvancedSearchPodcast = props => {
  const {
    programsList,
    setProgramsList,
    animatorsList,
    setAnimatorsList,
    categorysList,
    setCategorysList,
    programSelected,
    handleProgramSelected,
    animatorSelected,
    handleAnimatorSelected,
    categorySelected,
    handleCategoryelected,
    podcastHasProgram,
    setPodcastHasProgram,
    podcastHasAnimator,
    setPodcastHasAnimator,
    podcastHasCategory,
    setPodcastHasCategory,
    podcastHasProgramAndAnimator,
    setPodcastHasProgramAndAnimator,
    podcastHasProgramAndCategory,
    setPodcastHasProgramAndCategory,
    podcastHasAnimatorAndCategory,
    setPodcastHasAnimatorAndCategory,
    podcastHasAll,
    setPodcastHasAll
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid>
          <FormControl variant="outlined" className="MuiFormControl-fullWidth">
            <InputLabel id="demo-simple-select-outlined-label" fullWidth>
              Émissions
            </InputLabel>

            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Émissions"
              name="ro_program_program_id"
              value={programSelected}
              onChange={e => handleProgramSelected(e.target.value)}
            >
              {programsList.map(program => {
                return <MenuItem value={program.program_id}>{program.program_title}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className="MuiFormControl-fullWidth">
            <InputLabel id="demo-simple-select-outlined-label" fullWidth>
              Catégorie
            </InputLabel>

            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Catégorie"
              name="ro_category_category_id"
              value={categorySelected}
              onChange={e => handleCategoryelected(e.target.value)}
            >
              {categorysList.map(category => {
                return <MenuItem value={category.category_id}>{category.category_name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl variant="outlined" className="MuiFormControl-fullWidth">
            <InputLabel id="demo-simple-select-outlined-label" fullWidth>
              Animateurs
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Animateur"
              value={animatorSelected}
              onChange={e => handleAnimatorSelected(e.target.value)}
            >
              {animatorsList.map(animator => (
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
      </Grid>
    </div>
  );
};

export default AdvancedSearchPodcast;
