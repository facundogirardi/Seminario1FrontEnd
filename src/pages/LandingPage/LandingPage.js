import React from 'react'
import { Link } from 'react-router-dom'
import fondo from '../../imagenes/fondo.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./LandingPage.css";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/Business';

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
      <Link to="/Encuesta">
      <IconButton edge="end" className={classes.BusinessIcon} color="inherit"  aria-label="menu">
          <Button 
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<BusinessIcon />}
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
        <IconButton edge="start" className={classes.InstagramIcon} color="inherit"  aria-label="menu" href="https://www.instagram.com/observatoriopyme/" target="_blank">
          <InstagramIcon/>
        </IconButton>
        <IconButton edge="start" className={classes.LinkedInIcon} color="inherit"  aria-label="menu" href="https://www.linkedin.com/in/observatoriopyme/" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton edge="start" className={classes.FacebookIcon} color="inherit" aria-label="menu" href="https://www.facebook.com/fundacionobservatoriopyme" target="_blank">
          <FacebookIcon />
        </IconButton>
        <IconButton edge="start" className={classes.TwitterIcon} color="inherit" aria-label="menu" href="https://twitter.com/FOPyME" target="_blank">
          <TwitterIcon />
        </IconButton>
      </div>
      
    </div>
  )
}