import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagenes/logo.png';
import fotoDashboard from '../../imagenes/teamwork-chico.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./LandingPage.css";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
    padding: 24,
    height: "100%",
  },
}));


export default function () {
  const classes = useStyles();
  return (
    <div class="container-fluid">
      <Grid container spacing={15}>
        <Grid item xs={6} sm={4}>

        </Grid>
        <Grid item xs={6} sm={4}></Grid>
        <Grid item xs={6} sm={4}>
          <br />
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <br />
          <br />
          <center> <img src={logo} alt="alternative" /><h3>Bienvenidos</h3>
            <p>MVP | Analisis de Stock y Calidad con el cliente | Seminario profesional 1</p>
            <br />
            <Link to="/Gerente">
              <Button variant="contained" color="secondary">Gerente</Button>
            </Link>
            <br />
            <br />
            <br />
            <Link to="/Operador">
              <Button variant="contained" color="secondary">Operador</Button>
            </Link>
          </center>
        </Grid>
        <Grid item xs={2} sm={2}></Grid>
        <Grid item xs={6} sm={6}>

        </Grid>
      </Grid>
    </div>

  )
}