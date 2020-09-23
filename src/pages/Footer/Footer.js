import React from 'react';
import "./Footer.css";
import logo from './continuar.jpg';
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className="main-footer">
        <div id="izquierda">
          <center><a href="https://www.observatoriopyme.org.ar/"><img src={logo} width="70px" alt="Logo"/></a></center>
          <div id="derecha">
          <center>
          <IconButton edge="start" className={classes.InstagramIcon} color="primary"  aria-label="menu" href="https://www.instagram.com/observatoriopyme/">
            <InstagramIcon/>
          </IconButton>
          <IconButton edge="start" className={classes.LinkedInIcon} color="primary"  aria-label="menu" href="https://www.linkedin.com/in/observatoriopyme/">
            <LinkedInIcon />
          </IconButton>
          <IconButton edge="start" className={classes.FacebookIcon} color="primary" aria-label="menu" href="https://www.facebook.com/fundacionobservatoriopyme">
            <FacebookIcon />
          </IconButton>
          <IconButton edge="start" className={classes.TwitterIcon} color="primary" aria-label="menu" href="https://twitter.com/FOPyME">
            <TwitterIcon />
          </IconButton>
          </center>
          </div>
        </div>
          <p>
            <center>© FUNDACIÓN OBSERVATORIO PYME © 2020. Todos los derechos reservados. Telefono (+5411-4381-3331) Av. de Mayo 1147, Piso 3. Buenos Aires. Argentina</center>  
            <br/>
          </p>
      </div>
  );
}

export default Footer;