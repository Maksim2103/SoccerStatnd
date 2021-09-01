import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

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

export default function CardItem({ id, name, title, imgSrc, setApiUrl }) {
  const classes = useStyles();

  const showListTeams = (e) => {
    // console.log(e);
    e.preventDefault();
    setApiUrl(`http://api.football-data.org/v2/competitions/${id}/teams`);
  };

  const showCalendarTeams = (e) => {
    e.preventDefault();
    setApiUrl(`http://api.football-data.org/v2/competitions/${id}/matches`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.card}
          alt="Brazil Seria A"
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
          <Typography
            className={classes.title}
            gutterBottom
            variant="subtitle2"
            component="h2"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cards}>
        <NavLink to="/calendar" onClick={showCalendarTeams}>
          Календарь
        </NavLink>
        <NavLink to="/teams" onClick={showListTeams}>
          Команды
        </NavLink>
      </CardActions>
    </Card>
  );
}