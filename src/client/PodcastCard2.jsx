import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import './PodcastCard.scss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(() => ({
  playIcon: {
    height: 25,
    width: 25
  }
}));

const PodcastCard2 = props => {
  const { podcast } = props;

  const classes = useStyles();

  function slugify(string) {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  }

  return (
    <div className="podcastCard">
      <div className="header">
        <div className="wrap">
          <div className="btn-play">
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </div>
          <div className="group">
            <div className="title">{podcast.program_title}</div>
            <div className="date">{moment(podcast.podcast_creation_date).format('DD/MM/YYYY')}</div>
          </div>
        </div>
        <div className="duration">
          <AccessTimeIcon></AccessTimeIcon>
          {podcast.podcast_duration}
        </div>
      </div>

      <div
        className="coverPodcast"
        style={{
          backgroundImage: `url(${
            podcast.podcast_image ? podcast.podcast_image : '/radio-occitanie-default.jpg'
          })`
        }}
      />
      <div className="content">
        <h2>
          {podcast.podcast_title.substring(0, 40) +
            (podcast.podcast_title.length < 40 ? '' : '...')}
        </h2>
        <p>
          {podcast.podcast_description.substring(0, 80) +
            (podcast.podcast_description.length < 80 ? '' : '...')}
        </p>
      </div>
      <div className="footer">
        <div className="categoryTag">{podcast.category_name}</div>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          href={`/podcasts/${podcast.podcast_id}/${slugify(podcast.podcast_title)}`}
        >
          Voir plus
        </Button>
      </div>
    </div>
  );
};

PodcastCard2.propTypes = {};

export default PodcastCard2;
