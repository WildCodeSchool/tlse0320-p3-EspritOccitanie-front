import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactCardFlip from 'react-card-flip';
import * as moment from 'moment';
import 'moment/locale/fr';

const useStyles = makeStyles({
  root: {}
});

const ProgrammationCard = props => {
  const classes = useStyles();
  const { program } = props;
  moment.locale('fr');

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="CoverRadio"
            height="140"
            image={program.program_image ? program.program_image : '/radio-occitanie-default.jpg'}
            title="CoverRadio"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {program.program_title}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h6">
              {moment(program.program_start).format('LT')}
              {' - '}
              {moment(program.program_end).format('LT')}
            </Typography>

            <Button onClick={() => setIsFlipped(true)} variant="outlined" color="secondary">
              Voir qui anime
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="CoverRadio"
          height="140"
          image={program.program_image ? program.program_image : '/radio-occitanie-default.jpg'}
          title="CoverRadio"
        />
        {program.program_animator.map(animator => {
          return (
            <Typography variant="body2" color="textSecondary" component="h8">
              <span className="tagAnimateur">
                <span>
                  <img src="/anim.svg" alt="icon" />
                </span>
                {animator}
              </span>
            </Typography>
          );
        })}
        <Button
          className="button-retour"
          onClick={() => setIsFlipped(false)}
          variant="outlined"
          color="secondary"
        >
          Retour
        </Button>
      </Card>
    </ReactCardFlip>
  );
};

export default ProgrammationCard;
