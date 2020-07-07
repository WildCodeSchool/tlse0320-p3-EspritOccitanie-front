import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className="navBar">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
              {' '}
              <img src="/logo.svg" alt="logo Esprit Occitannie" />
            </div>
            <Link className="link" to="direct">
              <Button>Le direct</Button>
            </Link>
            <Link className="link" to="a-propos">
              <Button>A propos</Button>
            </Link>
            <Link className="link" to="grille-des-programmes">
              <Button>Grille des programmes</Button>
            </Link>
            <Link className="link" to="emissions">
              <Button>Émissions</Button>
            </Link>
            <Link className="link" to="podcasts">
              <Button>Podcasts</Button>
            </Link>
            <Link className="link" to="animateurs">
              <Button>Animateurs</Button>
            </Link>
            <Link className="link" to="contact">
              <Button>Nous contacter</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
