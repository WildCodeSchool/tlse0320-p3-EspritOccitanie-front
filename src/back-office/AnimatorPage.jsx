import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import AnimatorPostForm from './AnimatorPostForm';
import AnimatorTab from './AnimatorTab';
import './admin.scss';

const AnimatorPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [animatorIdToUpdate, setAnimatorIdToUpdate] = useState(null);
  const [animatorsData, setAnimatorsData] = useState([]);

  // get animators data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/animator').catch(error => {
        return console.log(error.toJSON());
      });
      return setAnimatorsData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-animator">
      <>
        <Container>
          <Paper elevation={2}>
            <AnimatorPostForm
              updateMode={updateMode}
              animatorIdToUpdate={animatorIdToUpdate}
              animatorsData={animatorsData}
            />
          </Paper>

          <Paper elevation={2}>
            <AnimatorTab
              setUpdateMode={setUpdateMode}
              animatorIdToUpdate={animatorIdToUpdate}
              setAnimatorIdToUpdate={setAnimatorIdToUpdate}
              animatorsData={animatorsData}
            />
          </Paper>
        </Container>
      </>
    </div>
  );
};

AnimatorPage.propTypes = {};

export default AnimatorPage;
