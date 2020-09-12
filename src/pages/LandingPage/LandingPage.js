import React from 'react'
import { Link } from 'react-router-dom'
import imagen2 from '../../imagenes/Imagen2.png';
import InputIcon from '@material-ui/icons/Input';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
 
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
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
        <img src ={imagen2} width="100%" alt="Imagen Benchmarking"/>
        <center><h1>Bienvenido al Termometro Pyme!</h1></center>
        <IconButton edge="end" className={classes.InputIcon} color="inherit"  aria-label="menu">
        <Button 
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<InputIcon />}
          >
          <Link to="/home"><center>Ingresar</center></Link></Button>
      </IconButton>
    </div>
  )
}