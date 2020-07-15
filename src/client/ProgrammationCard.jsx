import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import './ProgrammationCard.scss';

const ProgrammationCard = props => {
  const { program } = props;
  moment.locale('fr');
  // console.log('emissions', program);
  return (
    <div className="programCard">
      <div
        className="coverProgram"
        style={{
          backgroundImage: `url(${
            program.program_image ? program.program_image : '/radio-occitanie-default.jpg'
          })`
        }}
      />
      <div className="content">
        <h2>{program.program_title}</h2>
        <div>
          {moment(program.program_start).format('LT')} {moment(program.program_end).format('LT')}
        </div>
        <div>
          {program.program_animator.map(animator => {
            return (
              <span className="tagAnimateur">
                <span>
                  <img src="/anim.svg" alt="icon" />
                </span>
                {animator}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgrammationCard;
