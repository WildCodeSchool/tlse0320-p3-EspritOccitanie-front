import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Navbar.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className="navBar">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link className="link" to="/mentions-legales">
              <Button>Mentions légales</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
