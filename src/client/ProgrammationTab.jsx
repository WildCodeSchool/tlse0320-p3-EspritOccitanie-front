import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProgrammationCard from './ProgrammationCard';
import './Programmation.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [programmation, setProgrammation] = useState([]);

  // get programmation
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
        .get(
          'https://script.google.com/macros/s/AKfycbya2CcsOpKGTpl3rC6c4bGk-JfKNnKgcbB6fMxwi53NH-_wdms/exec'
        )
        .catch(function(error) {
          console.log(`error`, error.toJSON());
        });
      setProgrammation(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {programmation.map((program, i) => {
            return <Tab label={program.date} {...a11yProps(i)} />;
          })}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {programmation.length > 0 &&
              programmation[0].emissions.map(program => {
                console.log(programmation.length);
                console.log(program);
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ProgrammationCard program={program} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {programmation.length > 0 &&
              programmation[1].emissions.map(program => {
                console.log(programmation.length);
                console.log(program);
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ProgrammationCard program={program} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {programmation.length > 0 &&
              programmation[2].emissions.map(program => {
                console.log(programmation.length);
                console.log(program);
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ProgrammationCard program={program} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {programmation.length > 0 &&
              programmation[3].emissions.map(program => {
                console.log(programmation.length);
                console.log(program);
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ProgrammationCard program={program} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {programmation.length > 0 &&
              programmation[4].emissions.map(program => {
                console.log(programmation.length);
                console.log(program);
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ProgrammationCard program={program} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {programmation.length > 0 &&
              programmation[5].emissions.map(program => {
                console.log(programmation.length);
                console.log(program);
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ProgrammationCard program={program} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {programmation.length > 0 &&
              programmation[6].emissions.map(program => {
                console.log(programmation.length);
                console.log(program);
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <ProgrammationCard program={program} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </TabPanel>
    </div>
  );
}
