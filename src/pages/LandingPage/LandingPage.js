import React from 'react'
import { Link } from 'react-router-dom'
import fondo from '../../imagenes/fondo1.jpg';
import logo from '../../imagenes/logo.png';
import fotoDashboard from '../../imagenes/header-teamwork.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./LandingPage.css";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LockIcon from '@material-ui/icons/Lock';

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
      <img src ={fondo} width="100%" height="100%" alt="Imagen Benchmarking" color= "blue"/>
      <div STYLE="position:absolute; top:350px; left:1200px; visibility:visible z-index:1">
        <img src={fotoDashboard} alt="alternative"/>
      </div>
      <div STYLE="position:absolute; top:10px; left:50px; visibility:visible z-index:1">
        <img src={logo} alt="alternative"/>
      </div>
      <div STYLE="position:absolute; top:300px; left:50px; visibility:visible z-index:1">
        <h1>Bienvendio al Termometro PyME!</h1>
      </div>
      <div STYLE="position:absolute; top:360px; left:65px; visibility:visible z-index:1">
        <p>Conoce el estado de tu empresa en relacion al sector.</p>
      </div>
      <div STYLE="position:absolute; top:310px; left:1350px; visibility:visible z-index:1">
        <h3>Benchmarking</h3>
      </div>
      <div STYLE="position:absolute; top:400px; left:100px; visibility:visible z-index:1">
      <Link to="/Encuesta">
        <Button variant="contained">Realizar Consulta</Button>
      </Link>
      </div>
      <div STYLE="position:absolute; top:105px; left:1500px; visibility:visible z-index:1">
      <Link to="/ABM">
          <Button
            color="inherit"
            startIcon={<LockIcon />}
            >Admin</Button>
      </Link>
      </div>
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