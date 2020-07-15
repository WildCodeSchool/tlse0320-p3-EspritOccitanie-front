import React from 'react';
import { Container } from '@material-ui/core';
import './MentionsLegal.scss';

export default function MentionsLegal() {
  return (
    <div className="wrapper-about">
      <section className="full-blue header-title">
        <h1>Mentions Légales</h1>
      </section>

      <section className="">
        <Container className="flexAlignCenter">
          <div className="txt-right">
            <p>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin
              2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la
              connaissance des utilisateurs et visiteurs du site Esprit Occitanie les présentes
              mentions légales.
            </p>
            <p>
              Le site Esprit Occitanie est accessible à l'adresse suivante : www.esprit-occitanie.fr
              (ci-après "le Site"). L'accès et l'utilisation du Site sont soumis aux présentes "
              Mentions légales" détaillées ci-après ainsi qu'aux lois et/ou règlements applicables.
            </p>
            <p>
              La connexion, l'utilisation et l'accès à ce Site impliquent l'acceptation intégrale et
              sans réserve de l'internaute de toutes les dispositions des présentes Mentions
              Légales.
            </p>
          </div>
        </Container>
      </section>

      <section className="full">
        <Container className="space">
          <h2>INFORMATIONS LÉGALES</h2>
          <p className="txt">
            En vertu de l'Article 6 de la Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
            l'économie numérique, il est précisé dans cet article l'identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
          <h3>Editeur du site</h3>
          <p>Le site Esprit Occitanie est édité par :</p>
          <p>...</p>
          <p>domicilié à l'adresse suivante : ...</p>
          <p>Téléphone : ...</p>
          <p>Adresse e-mail : ...</p>
          <h3>Directeur de publication</h3>
          <p>Le directeur de publication est :</p>
          <p>Jacques Lavergne</p>
          <h3>Hébergeur du site</h3>
          <p>Le site Esprit Occitanie est hébergé par :</p>
          <p>OVH</p>
          <p>dont le siège social est situé à l'adresse suivante : ...</p>
          <p>Téléphone : ...</p>
          <p>Adresse e-mail : ...</p>
          <h3>Utilisateurs</h3>
          <p>
            Sont considérés comme utilisateurs tous les internautes qui naviguent, lisent,
            visionnent et utilisent le site Esprit Occitanie.
          </p>
        </Container>
      </section>

      <section className="full-white">
        <Container className="flexAlignCenter">
          <div className="txt-left">
            <h2>CONFIDENTIALITE </h2>
            <p>
              L'Editeur du site porte à la connaissance de l'Utilisateur que dans le cadre de sa
              navigation sur le site, ses données à caractère personnel ne sont ni traitées, ni
              collectées. Ainsi, l'Editeur déclare ne collecter ou ne traiter aucune information
              étant de nature à pouvoir identifier l'Utilisateur.
            </p>
          </div>
        </Container>
      </section>

      <section className="full">
        <Container className="space">
          <h2>Le site Esprit Occitanie vous souhaite une excellente navigation !</h2>
        </Container>
      </section>
    </div>
  );
}
