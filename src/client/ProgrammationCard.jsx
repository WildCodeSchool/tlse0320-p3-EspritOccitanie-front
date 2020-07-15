import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

const ProgrammationCard = props => {
  const { program, setProgrammation } = props;
  moment.locale('fr');
  console.log('emissions', program);
  return (
    <div>
      {program.map(data => {
        return (
          <div>
            <img
              src={data.program_image}
              alt={data.program_title}
              className="program_detail_image"
            />
            <p>{data.program_title}</p>
            <p>
              {moment(data.program_start).format('LT')} {moment(data.program_end).format('LT')}
            </p>
            {data.program_animator.map(animator => {
              return <span className="tagAnimateur">{animator}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProgrammationCard;
