import React, { useState, useEffect, useRef } from 'react';
import axios from '../helpers/axios';
import { Container, Grid } from '@material-ui/core';
import Contact from './Contact';
import './Apropos.scss';

export default function Apropos() {
  const [allAnimators, setAllAnimators] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const cardDescAnimatorRef = useRef();

  // Get animator request
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/animator`).catch(function(error) {
        console.log(`error animator`, error.toJSON());
      });
      setAllAnimators(result.data);
    };
    fetchData();
  }, []);

  const maxDesc = e => {
    if (isClick) {
      setIsClick(false);
      e.target.style.display = 'block';
      e.target.style.maxHeight = '100%';
    }

    if (!isClick) {
      setIsClick(true);
      e.target.style.display = '-webkit-box';
      e.target.style.maxHeight = '44px';
    }
  };

  return (
    <div className="wrapper-about">
      <section className="full-blue header-title">
        <h1>Bienvenue sur Radio Occitanie</h1>
      </section>

      <section className="">
        <Container maxWidth="lg" className="flexAlignCenter">
          <Grid container spacing={3} className="alignCenter">
            <Grid item xs={12} md={6} lg={6}>
              <div className="img-left">
                <img src="/podacst.png" alt="podcast-radio-occitanie" />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className="txt-right">
                <h2>Une nouvelle radio est née</h2>
                <p>
                  Esprit Occitanie est née récemment, portée par un groupe de passionnés, passionnés
                  par ce fabuleux média qu’est la radio, mais aussi passionnés par leur région,
                  cette Occitanie et ce pays Catalan, dont ils entendent faire connaître et aimer
                  les valeurs souvent fort anciennes, ainsi que leurs nombreux atouts géographiques,
                  économiques et historiques. Des valeurs telles que la convivencia et le partage
                  qui sont, elles, ancestrales en pays Occitan. Mais aussi des valeurs plus
                  générales telles l’Humanisme, la tolérance, la connaissance de soi et de l’autre,
                  l’amour de la Culture et bien évidemment celle des langues Occitane et Catalane.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="full">
        <Container maxWidth="lg" className="space">
          <h2>Avec une nécessaire ouverture sur notre Monde</h2>
          <p className="txt">
            Si divers, si magnifique mais aussi en proie à des passions, des conflits, un monde
            riche d’opportunités mais aussi lourd de menaces. Des atouts géographiques que sont la
            mer Méditerranée, les Pyrénées, mais aussi l’intérieur des terres aux Pays si variés et
            généreux, sans oublier les gastronomies de chacun de ceux-ci qui ont contribué à faire
            la réputation de ces terroirs. Des atouts économiques car notre région connaît un
            développement tout à fait considérable porté par des PME-PMI particulièrement dynamiques
            et innovantes, de grandes entreprises, une industrie agroalimentaire puissante et un
            tourisme dont la croissance ne se dément pas. Des atouts historiques qui ont donné à
            notre région ses assises intellectuelles et économiques, dont les traces et les vestiges
            constituent les sentinelles que nous ont laissées nos prédécesseurs lointains ou
            proches.
          </p>
        </Container>
      </section>

      <section className="full-white">
        <Container maxWidth="lg" className="flexAlignCenter">
          <Grid container spacing={3} className="alignCenter">
            <Grid item xs={12} md={6} lg={6}>
              <div className="txt-left">
                <h2>Qualité, professionalisme et créativité</h2>
                <p>
                  Tels sont les maitres mots qui guideront le travail de cette radio et de celles et
                  ceux qui la fabriqueront. Une radio qui fera la part belle au terrain, ainsi
                  qu’aux émissions généralistes réalisées en francais, mais aussi en Occitan et
                  Catalan. Et qui verra se cotoyer des émissions aux thémes variés - économiques
                  sociaux, philosophiques, sociétaux, spatiaux, historiques, politiques, médicaux,
                  littéraires, environnementaux, musicaux... afin que notre curiosité à votre
                  service rende compte des Autres, de leur diversité et de ces differences qui nous
                  enrichissent.
                  <p className="text">
                    Alors rejoignez l’aventure d’Esprit Occitanie, participez-y, apportez-nous vos
                    idées, votre énergie, vos connaissances, toute l’équipe vous accueillera à bras
                    ouverts dans cette radio qui a vocation avant tout à être la vôtre.
                    <h3 className="title">Le Président, Jacques Lavergne</h3>
                  </p>
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className="img-right">
                <img src="/equipes.png" alt="animateur radio occitanie" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="full-white">
        <Container maxWidth="md" className="space ">
          <h2>L’équipe</h2>
          <Grid container spacing={5}>
            {allAnimators.map(animator => {
              return (
                <Grid item xs={12} md={6} lg={6}>
                  <div className="author-card">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${
                          animator.animator_image ? animator.animator_image : '/default-author.png'
                        })`
                      }}
                    />
                    <div className="desc">
                      <h3> {animator.animator_firstname + ' ' + animator.animator_lastname}</h3>
                      <p
                        ref={cardDescAnimatorRef}
                        className={isClick ? 'your_className' : 'descText'}
                        onClick={e => maxDesc(e)}
                      >
                        {animator.animator_description}
                      </p>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>

      <section className="full-blue1">
        <Container maxWidth="md">
          <h2>Nous contacter</h2>

          <Contact />

          <div>
            <img src="/contact-illustration.jpg" alt="contact" />
          </div>
        </Container>
      </section>
    </div>
  );
}
