/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ProgramPostForm from './ProgramPostForm';
import ProgramTab from './ProgramTab';
import './admin.scss';

const ProgramPage = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [programIdToUpdate, setProgramIdToUpdate] = useState(null);
  const [programsData, setProgramsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/program').catch(error => {
        return console.log(error.toJSON());
      });
      return setProgramsData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="admin-program">
      <>
        <Container>
          <Paper elevation={2}>
            <ProgramPostForm
              updateMode={updateMode}
              programIdToUpdate={programIdToUpdate}
              programsData={programsData}
            />
          </Paper>
          <Paper elevation={2}>
            <ProgramTab
              setUpdateMode={setUpdateMode}
              programIdToUpdate={programIdToUpdate}
              setProgramIdToUpdate={setProgramIdToUpdate}
              programsData={programsData}
            />
          </Paper>
        </Container>
      </>
    </div>
  );
};

ProgramPage.propTypes = {};

export default ProgramPage;
