/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import axios from 'axios';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { refreshPage } from './util/utilFunctions';

const AdvancedSearchPodcast = props => {
  const {
    programsList,
    setProgramsList,
    animatorsList,
    categorysList,
    podcastsList,
    programSelected,
    handleProgramSelected,
    animatorSelected,
    handleAnimatorSelected,
    categorySelected,
    handleCategoryelected,
    handleCategorySelectedProg,
    categorySelectedProg,
    animatorSelectedProg,
    handleAnimatorSelectedProg
  } = props;

  // console.log('catselected', categorySelectedProg);

  const url = window.location.href.split('/');

  return (
    <div>
      <Grid container spacing={2}>
        {url[3] === 'podcasts' ? (
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
        ) : null}

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
              value={url[3] === 'podcasts' ? categorySelected : categorySelectedProg}
              onChange={e =>
                url[3] === 'podcasts'
                  ? handleCategoryelected(e.target.value)
                  : handleCategorySelectedProg(e.target.value)
              }
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
        <div>
          <IconButton aria-label="refresh" onClick={refreshPage}>
            <RefreshIcon />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
};

export default AdvancedSearchPodcast;
