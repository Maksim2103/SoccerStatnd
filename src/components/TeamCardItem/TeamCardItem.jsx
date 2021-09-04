import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: '10px',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '10px',
  },
  card: {
    height: 160,
    backgroundSize: 'contain',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function TeamCardItem({ id, name, title, imgSrc }) {
  const classes = useStyles();
  console.log(id);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.card}
          alt={name}
          image={imgSrc}
          title={name}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cards}>
        <NavLink to={`/team/${id}/calendar/`}>Календарь</NavLink>
      </CardActions>
    </Card>
  );
}
