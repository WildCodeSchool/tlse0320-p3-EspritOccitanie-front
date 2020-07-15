import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import moment from 'moment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProgrammationCard from './ProgrammationCard';

const Programmation = () => {
  const [programmation, setProgrammation] = useState([]);

  // get programmation
  useEffect(() => {
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbya2CcsOpKGTpl3rC6c4bGk-JfKNnKgcbB6fMxwi53NH-_wdms/exec'
      )
      .then(res => {
        return setProgrammation(res.data);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        {programmation.map(program => {
          return (
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <p>{program.date}</p>
                  <ProgrammationCard
                    program={program.emissions}
                    setProgrammation={setProgrammation}
                  />
                </Grid>
              </Grid>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Programmation;

// {program.emissions.map(emission => {
//   return (
//     <div>
//       <img
//         src="/radio-occitanie-default.jpg"
//         alt={emission.program_title}
//         className="program_detail_image"
//       />
//       <p>{emission.program_title}</p>
//       <p>
//         {moment(emission.program_start).format('LLL')}{' '}
//         {moment(emission.program_end).format('LT')}
//       </p>
//       <p>
//         {emission.program_animator.length > 1 && emission.program_animator.join(' ')}
//       </p>
//     </div>
//   );
// })}
