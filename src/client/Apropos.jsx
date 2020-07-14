import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Apropos.scss';

export default function Apropos() {
  return (
    <div className="wrapper-about">
      <section className="full-header">dklfsjlskdjfglks</section>

      <section className="">
        <Container maxWidth="lg" className="flexAlignCenter">
          <div className="img-left">
            <img src="/podacst.png"></img>
          </div>
          <div className="txt-right">
            <h2>this is a titlte</h2>
            <p>
              Une nouvelle radio est née récemment portée par un groupe de passionnés, passionnés
              par ce fabuleux média qu’est la radio, mais aussi passionnés par leur région, cette
              Occitanie et ce pays Catalan, dont ils entendent faire connaître et aimer les valeurs
              souvent fort anciennes, ainsi que leurs nombreux atouts géographiques, économiques,
              historiques. Des valeurs telles que la convivencia et le partage qui sont, elles,
              ancestrales en pays Occitan. Mais aussi des valeurs plus générales telles l’Humanisme,
              la tolérance, la connaissance de soi et de l’autre, l’amour de la Culture et bien
              évidemment celle des langues Occitane et Catalane.
            </p>
          </div>
        </Container>
      </section>

      <section className="full">
        <Container maxWidth="lg" className="space">
          <h2>the second title</h2>
          <p>
            Avec une nécessaire ouverture sur notre Monde, si divers, si magnifique mais aussi en
            proie à des passions, des conflits, un monde riche d’opportunités mais aussi lourd de
            menaces. Des atouts géographiques que sont la mer Méditerranée, les Pyrénées, mais aussi
            l’intérieur des terres aux Pays si variés et généreux, sans oublier les gastronomies de
            chacun de ceux-ci qui ont contribué à faire la réputation de ces terroirs. Des atouts
            économiques car notre région connaît un développement tout à fait considérable porté par
            des PME-PMI particulièrement dynamiques et innovantes, de grandes entreprises, une
            industrie agroalimentaire puissante et un tourisme dont la croissance ne se dément pas.
            Des atouts historiques qui ont donné à notre région ses assises intellectuelles et
            économiques, dont les traces et les vestiges constituent les sentinelles que nous ont
            laissées nos prédécesseurs lointains ou proches.
          </p>
        </Container>
      </section>

      <section className="full-white">
        <Container maxWidth="lg" className="flexAlignCenter">
          <div className="txt-left">
            <h2>this is a titlte</h2>
            <p>
              Une nouvelle radio est née récemment portée par un groupe de passionnés, passionnés
              par ce fabuleux média qu’est la radio, mais aussi passionnés par leur région, cette
              Occitanie et ce pays Catalan, dont ils entendent faire connaître et aimer les valeurs
              souvent fort anciennes, ainsi que leurs nombreux atouts géographiques, économiques,
              historiques. Des valeurs telles que la convivencia et le partage qui sont, elles,
              ancestrales en pays Occitan. Mais aussi des valeurs plus générales telles l’Humanisme,
              la tolérance, la connaissance de soi et de l’autre, l’amour de la Culture et bien
              évidemment celle des langues Occitane et Catalane.
            </p>
          </div>
          <div className="img-right">
            <img src="/equipes.png"></img>
          </div>
        </Container>
      </section>

      <section className="full">
        <Container maxWidth="lg" className="space">
          <h2>the second title</h2>
          <p>
            Qualité, professionalisme et créativité, tels sont les maitres mots qui guideront le
            travail de cette radio et de celles et ceux qui la fabriqueront. Une radio qui fera la
            part belle au terrain, ainsi qu’aux émissions généralistes réalisées en francais, mais
            aussi en Occitan et Catalan. Et qui verra se cotoyer des émissions aux thémes variés -
            économiques sociaux, philosophiques, sociétaux, spatiaux, historiques, politiques,
            médicaux, littéraires, environnementaux, musicaux... afin que notre curiosité à votre
            service rende compte des Autres, de leur diversité et de ces differences qui nous
            enrichissent.
            <p className="text">
              Alors rejoignez l’aventure d’Esprit Occitanie, participez-y, apportez-nous vos idées,
              votre énergie, vos connaissances, toute l’équipe vous accueillera à bras ouverts dans
              cette radio qui a vocation avant tout à être la vôtre.
              <h3 className="title">Le Président, Jacques Lavergne</h3>
            </p>
          </p>
        </Container>
      </section>

      <section className="full-white">
        <Container maxWidth="lg" className="space">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={6}>
              <h2>L’équipes d’Esprit Occitanie</h2>
              <div className="author-card">
                <div className="img"></div>
                <div className="desc">
                  endancieuse, pleine de gouaille, j'irai à la rencontre de mes coups de cœur dans
                  le domaine de la mode, de la déco, des sorties… J'interrogerai 2 invités
                  emblématiques de ces secteurs pour faire découvrir un lieu, un produit, une bonne
                  affaire À Très vite !
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
