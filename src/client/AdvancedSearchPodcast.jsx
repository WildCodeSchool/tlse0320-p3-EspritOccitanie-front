/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const AdvancedSearchPodcast = props => {
  const {
    programsList,
    animatorsList,
    categorysList,
    programSelected,
    handleProgramSelected,
    animatorSelected,
    handleAnimatorSelected,
    categorySelected,
    handleCategoryelected
  } = props;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid lg={4}>
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
        <Grid lg={4}>
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
        <Grid lg={4}>
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
