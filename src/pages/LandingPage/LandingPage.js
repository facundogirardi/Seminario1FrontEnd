import React from 'react'
import { Link } from 'react-router-dom'
import imagen1 from '../../imagenes/Imagen1.png';
import InputIcon from '@material-ui/icons/Input';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import "./LandingPage.css";

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
      <img id="image" src ={imagen1} width="100%" height="100%" alt="Imagen Benchmarking" />
      <p id="text">
      <center>Bienvenido al Termometro Pyme!</center>
      <IconButton edge="end" className={classes.InputIcon} color="inherit"  aria-label="menu">
          <Button 
            variant="contained"
            color="inherit"
            className={classes.button}
            startIcon={<InputIcon />}
            >
            <Link to="/Encuesta"><center>Ingresar</center></Link>
          </Button>
        </IconButton>
      </p>
    </div>
  )
}