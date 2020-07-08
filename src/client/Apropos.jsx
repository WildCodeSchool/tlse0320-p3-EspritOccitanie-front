import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Apropos.scss';

export default function Apropos() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={4} />
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <h2 className="title">Le mot de la radio ...</h2>
          <h2 className="title">
            « C’est dans le vide de la pensée que s’inscrit le mal. » Hannah Arendt
          </h2>
          <p className="text">
            Une nouvelle radio est née récemment portée par un groupe de passionnés, passionnés par
            ce fabuleux média qu’est la radio, mais aussi passionnés par leur région, cette
            Occitanie et ce pays Catalan, dont ils entendent faire connaître et aimer les valeurs
            souvent fort anciennes, ainsi que leurs nombreux atouts géographiques, économiques,
            historiques. Des valeurs telles que la convivencia et le partage qui sont, elles,
            ancestrales en pays Occitan. Mais aussi des valeurs plus générales telles l’Humanisme,
            la tolérance, la connaissance de soi et de l’autre, l’amour de la Culture et bien
            évidemment celle des langues Occitane et Catalane.
          </p>
          <p className="text">
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
          <p className="text">
            Des atouts historiques qui ont donné à notre région ses assises intellectuelles et
            économiques, dont les traces et les vestiges constituent les sentinelles que nous ont
            laissées nos prédécesseurs lointains ou proches. De tout cela et de biens d’autres
            choses encore, Esprit Occitanie a l’ambition de se faire le reflet, notamment en donnant
            la parole à toutes ses femmes et hommes, parfois d’origines si diverses, mais qui,
            toutes et tous, quotidiennement, chacun dans leur registre, « font » ce qu’est
            aujourd’hui la région Occitanie, et lui permettent d’exister, de se développer, de créer
            du lien social, de la richesse mais aussi du bien vivre ensemble.
          </p>
          <p className="text">
            Qualité, professionalisme et créativité, tels sont les maitres mots qui guideront le
            travail de cette radio et de celles et ceux qui la fabriqueront. Une radio qui fera la
            part belle au terrain, ainsi qu’aux émissions généralistes réalisées en francais, mais
            aussi en Occitan et Catalan. Et qui verra se cotoyer des émissions aux thémes variés -
            économiques sociaux, philosophiques, sociétaux, spatiaux, historiques, politiques,
            médicaux, littéraires, environnementaux, musicaux... afin que notre curiosité à votre
            service rende compte des Autres, de leur diversité et de ces differences qui nous
            enrichissent.
          </p>
          <p className="text">
            Alors rejoignez l’aventure d’Esprit Occitanie, participez-y, apportez-nous vos idées,
            votre énergie, vos connaissances, toute l’équipe vous accueillera à bras ouverts dans
            cette radio qui a vocation avant tout à être la vôtre.
          </p>
          <p className="title">Le Président, Jacques Lavergne</p>
        </Grid>
      </Grid>
    </Container>
  );
}
