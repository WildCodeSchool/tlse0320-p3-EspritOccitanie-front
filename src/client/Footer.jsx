import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="wrapper">
        <div className="img">
          <Link className="link" to="/qui-sommes-nous">
            <img src="/about.png" alt="image Esprit Occitanie c'est quoi?" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/login">
            <a>Administration</a>
          </Link>
          <Link className="link" to="/mentions-legales">
            <a>
              Mentions
              <span>légales</span>
            </a>
          </Link>
          <Link className="link" to="/qui-sommes-nous">
            <a>Contact</a>
          </Link>
        </div>
        <div className="socials">
          <div className="item">
            <a href="https://www.facebook.com/espritoccitanie" target="_blank">
              <img src="/facebook.svg" alt="logo facebook" />
            </a>
          </div>
          <div className="item">
            <a href="https://www.instagram.com/espritoccitanie/" target="_blank">
              <img src="/instagram.svg" alt="logo instagram" />
            </a>
          </div>
          <div className="item">
            <a href="https://twitter.com/EspritOccitanie" target="_blank">
              <img src="/twitter.svg" alt="logo twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
