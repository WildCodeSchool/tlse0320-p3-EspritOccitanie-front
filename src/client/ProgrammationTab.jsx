import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        {programmation.length > 0 && <p> {programmation[0].date}</p>}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {programmation.length > 0 && <p> {programmation[1].date}</p>}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {programmation.length > 0 && <p> {programmation[2].date}</p>}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {programmation.length > 0 && <p> {programmation[3].date}</p>}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {programmation.length > 0 && <p> {programmation[4].date}</p>}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {programmation.length > 0 && <p> {programmation[5].date}</p>}
      </TabPanel>
      <TabPanel value={value} index={6}>
        {programmation.length > 0 && <p> {programmation[6].date}</p>}
      </TabPanel>
    </div>
  );
}
