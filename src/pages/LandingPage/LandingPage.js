import React from 'react'
import { Link } from 'react-router-dom'
import fondo from '../../imagenes/fondo.png';
import InputIcon from '@material-ui/icons/Input';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./LandingPage.css";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function () {
  const classes = useStyles();
  return (
    <div id="container">
      <img src ={fondo} width="100%" height="100%" alt="Imagen Benchmarking" />
      <p id="text">
      <center>Bienvenido al Termometro Pyme!</center>
      <Link to="/Preguntas">
      <IconButton edge="end" className={classes.InputIcon} color="inherit"  aria-label="menu">
          <Button 
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<InputIcon />}
            >
            Pyme
          </Button>
        </IconButton>
      </Link>
      <Link to="/ABM">
      <IconButton edge="end" className={classes.SupervisorAccountIcon} color="inherit"  aria-label="menu">
          <Button 
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<SupervisorAccountIcon />}
            >
            Administrador
          </Button>
        </IconButton>
      </Link>
      </p>
      <div id="logos">
        <IconButton edge="start" className={classes.InstagramIcon} color="inherit"  aria-label="menu" href="https://www.instagram.com/observatoriopyme/">
          <InstagramIcon/>
        </IconButton>
        <IconButton edge="start" className={classes.LinkedInIcon} color="inherit"  aria-label="menu" href="https://www.linkedin.com/in/observatoriopyme/">
          <LinkedInIcon />
        </IconButton>
        <IconButton edge="start" className={classes.FacebookIcon} color="inherit" aria-label="menu" href="https://www.facebook.com/fundacionobservatoriopyme">
          <FacebookIcon />
        </IconButton>
        <IconButton edge="start" className={classes.TwitterIcon} color="inherit" aria-label="menu" href="https://twitter.com/FOPyME">
          <TwitterIcon />
        </IconButton>
      </div>
      
    </div>
  )
}