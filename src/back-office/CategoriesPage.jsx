import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CategoriesPostForm from './CategoriesPostForm';

const CategoriesPage = () => {
  return (
    <div>
      <>
        <Container>
          <Paper elevation={2}>
            <CategoriesPostForm />
          </Paper>
        </Container>
      </>
    </div>
  );
};

CategoriesPage.propTypes = {};

export default CategoriesPage;
