import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PodcastsPage from './PodcastsPage';
import CategoriesPage from './CategoriesPage';
import AnimatorPage from './AnimatorPage';
import ProgramPage from './PorgramPage';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Emissions" {...a11yProps(0)} />
        <Tab label="Podcasts" {...a11yProps(1)} />
        <Tab label="Catégories" {...a11yProps(2)} />
        <Tab label="Animateurs" {...a11yProps(3)} />
        <Tab label="Programmation" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProgramPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PodcastsPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CategoriesPage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AnimatorPage />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
