import React, { useState } from 'react';
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

export default function Navbar() {
  const classes = useStyles();
  const [mobileNavActive, setMobileNavActive] = useState(false);

  console.log(mobileNavActive);

  return (
    <div className="navBar">
      <div className={classes.root}>
        <AppBar position="static" className="navEo">
          <Toolbar className="content-nav">
            <div>
              <a href="/">
                <img src="/logo.svg" alt="logo Esprit Occitannie" />
              </a>
            </div>
            <span className="desktop-link">
              <Link className="link" to="direct">
                <Button>Le direct</Button>
              </Link>
              <Link className="link" to="/a-propos">
                <Button>Qui sommes nous ?</Button>
              </Link>
              <Link className="link" to="/grille-des-programmes">
                <Button>Grille des programmes</Button>
              </Link>
              <Link className="link" to="/emissions">
                <Button>Émissions</Button>
              </Link>
              <Link className="link" to="/podcasts">
                <Button>Podcasts</Button>
              </Link>
            </span>

            <div
              className="burger"
              onClick={
                mobileNavActive ? () => setMobileNavActive(false) : () => setMobileNavActive(true)
              }
            >
              <img src={mobileNavActive ? '/close.svg' : '/burger.svg'} alt="menu burger" />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className={!mobileNavActive ? 'nav-mobile' : 'nav-mobile active'}>
        <Link className="link" to="direct" onClick={() => setMobileNavActive(false)}>
          <Button>Le direct</Button>
        </Link>
        <Link className="link" to="/qui-sommes-nous" onClick={() => setMobileNavActive(false)}>
          <Button>Qui sommes nous ?</Button>
        </Link>
        <Link
          className="link"
          to="/grille-des-programmes"
          onClick={() => setMobileNavActive(false)}
        >
          <Button>Grille des programmes</Button>
        </Link>
        <Link className="link" to="/emissions" onClick={() => setMobileNavActive(false)}>
          <Button>Émissions</Button>
        </Link>
        <Link className="link" to="/podcasts" onClick={() => setMobileNavActive(false)}>
          <Button>Podcasts</Button>
        </Link>
      </div>
    </div>
  );
}
