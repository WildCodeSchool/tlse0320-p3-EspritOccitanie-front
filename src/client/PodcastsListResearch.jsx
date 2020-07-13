import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PodcastCard2 from './PodcastCard2';

function select(
  programSelected,
  animatorSelected,
  categorySelected,
  podcastHasProgram,
  podcastHasAnimator,
  podcastHasCategory,
  podcastHasProgramAndAnimator,
  podcastHasProgramAndCategory,
  podcastHasAnimatorAndCategory,
  podcastHasAll,
  podcastsList
) {
  if (
    programSelected &&
    podcastHasProgram &&
    animatorSelected &&
    podcastHasAnimator &&
    categorySelected &&
    podcastHasCategory
  ) {
    return podcastHasAll;
  }
  if (
    programSelected &&
    podcastHasProgram &&
    animatorSelected &&
    podcastHasAnimator &&
    (!categorySelected || categorySelected === 'Catégorie')
  ) {
    return podcastHasProgramAndAnimator;
  }
  if (
    programSelected &&
    podcastHasProgram &&
    categorySelected &&
    podcastHasCategory &&
    (!animatorSelected || animatorSelected === 'Animateurs')
  ) {
    return podcastHasProgramAndCategory;
  }
  if (
    animatorSelected &&
    podcastHasAnimator &&
    categorySelected &&
    podcastHasCategory &&
    (!programSelected || programSelected === 'Émissions')
  ) {
    return podcastHasAnimatorAndCategory;
  }
  if (
    animatorSelected &&
    podcastHasAnimator &&
    (!categorySelected || categorySelected === 'Catégorie') &&
    (!programSelected || programSelected === 'Émissions')
  ) {
    return podcastHasAnimator;
  }
  if (
    categorySelected &&
    podcastHasCategory &&
    (!animatorSelected || animatorSelected === 'Animateurs') &&
    (!programSelected || programSelected === 'Émissions')
  ) {
    return podcastHasCategory;
  }
  if (
    programSelected &&
    podcastHasProgram &&
    (!categorySelected || categorySelected === 'Catégorie') &&
    (!animatorSelected || animatorSelected === 'Animateurs')
  ) {
    return podcastHasProgram;
  }
  return podcastsList;
}

const PodcastListResearch = props => {
  const {
    programsList,
    animatorsList,
    categorysList,
    programSelected,
    animatorSelected,
    categorySelected,
    podcastHasProgram,
    podcastHasAnimator,
    podcastHasCategory,
    podcastHasProgramAndAnimator,
    podcastHasProgramAndCategory,
    podcastHasAnimatorAndCategory,
    podcastHasAll,
    podcastsList
  } = props;

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {select(
            programSelected,
            animatorSelected,
            categorySelected,
            podcastHasProgram,
            podcastHasAnimator,
            podcastHasCategory,
            podcastHasProgramAndAnimator,
            podcastHasProgramAndCategory,
            podcastHasAnimatorAndCategory,
            podcastHasAll,
            podcastsList
          ).map(podcast => (
            <Grid item xs={12} md={6} lg={4}>
              <PodcastCard2 key={podcast.podcast_id} podcast={podcast} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default PodcastListResearch;
