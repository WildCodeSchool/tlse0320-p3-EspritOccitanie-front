/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProgramDetail.scss';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProgramPodcastList from './ProgramPodcastList';

const ProgramDetail = props => {
  const [programData, setProgramData] = useState([]);
  const { program_id } = useParams();
  const { onPlay, setOnPlay, setIdPodastPlay, idPodastPlay, playerRef, setDataPlayer } = props;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/program/${program_id}`).catch(function(error) {
        console.log(error.toJSON());
      });
      setProgramData([result.data]);
    };
    fetchData();
  }, []);

  const [animators, setAnimators] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get(`/animator?program=${program_id}`)
        .then(response => {
          return response.data;
        })
        .then(response => {
          const arrayGet = [];
          for (let i = 0; i < response.length; i++) {
            const str = `/animator/${response[i].ro_animator_animator_id}`;
            arrayGet.push(axios.get(str));
          }
          const animatorList = axios.all(arrayGet).then(
            axios.spread((...res) => {
              let animator = [];
              for (let j = 0; j < res.length; j++) {
                animator = [...animator, res[j].data];
              }
              return animator;
            })
          );
          return animatorList;
        })
        .catch(error => {
          console.log(error.toJSON());
        });
      setAnimators(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {programData.map(data => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <img
                  src={data.program_image || '/radio-occitanie-default.jpg'}
                  alt={data.program_title}
                  className="program_detail_image"
                />
                <Typography gutterBottom variant="h5" component="h2">
                  {data.program_title}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {animators.map(animator => {
                    console.log('animator', animator);
                    return (
                      <span className="tagAnimateur">
                        <span>
                          <img src="/anim.svg" alt="icon" />
                        </span>
                        {` ${animator.animator_firstname} ${animator.animator_lastname} `}
                      </span>
                    );
                  })}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {data.program_description}
                </Typography>
              </Grid>
            );
          })}
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <ProgramPodcastList
              onPlay={onPlay}
              setOnPlay={setOnPlay}
              setIdPodastPlay={setIdPodastPlay}
              idPodastPlay={idPodastPlay}
              playerRef={playerRef}
              setDataPlayer={setDataPlayer}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProgramDetail;
