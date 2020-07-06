import React from 'react';
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

export default function ButtonAppBar() {
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
            <Button color="inherit">Le direct</Button>
            <Button color="inherit">A propos</Button>
            <Button color="inherit">Grille des programmes</Button>
            <Button color="inherit">Émissions</Button>
            <Button color="inherit">Podcasts</Button>
            <Button color="inherit">Animateurs</Button>
            <Button color="inherit">Nous contacter</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
