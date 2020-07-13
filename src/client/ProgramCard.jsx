/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { slugify } from './util/utilFunctions';
import './ProgramCard.scss';

const ProgramCard = props => {
  const {
    program_id,
    program_title,
    program_description,
    program_image,
    ro_category_category_id
  } = props.dataPrograms;

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
    <div className="programCard">
      <div
        className="coverProgram"
        style={{
          backgroundImage: `url(${program_image ? program_image : '/radio-occitanie-default.jpg'})`
        }}
      />
      <div className="content">
        <h2>{program_title}</h2>

        {animators.map(animator => {
          return (
            <span className="tagAnimateur">
              <span>
                <img src="/anim.svg" alt="icon" />
              </span>
              {` ${animator.animator_firstname} ${animator.animator_lastname} `}
            </span>
          );
        })}

        <p> {program_description.substring(0, 120) + '...'}</p>
      </div>
      <div className="footer">
        <Link component={RouterLink} to={`/emission/${program_id}/${slugify(program_title)}`}>
          <Button variant="outlined" color="primary" size="small">
            Voir plus
          </Button>
        </Link>
      </div>
    </div>
  );
};

ProgramCard.propTypes = {};

export default ProgramCard;
