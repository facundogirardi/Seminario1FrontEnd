import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Resultado.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router';
import banner from '../../imagenes/banner4.jpg';

//importo llamada a endpoint
import { getEncuestaRespID } from "../../controller/miApp.controller";

const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width: "98%",
  },
}));

const useStylesCards = makeStyles({
  root: {
    width: "98%",
    margin: '0 10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStylesText = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: "100%",
    color: theme.palette.text.secondary,
  },
}));

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

var BenchP1 = "1"
var BenchP2 = "2"
var BenchP3 = "3"
var BenchP4 = "4"
var BenchP5 = "5"

export default function Encuesta(props) {
  const clase1 = useStylesCards();
  const clase3 = useStylesText();
  const clase4 = useStylesButton();
  const [encuestas, setEncuestas] = useState([]);
  const clase5 = useStylesGrid();
  const classes = useStyles();
  const history = useHistory();

  var url = window.location.href;
  var tituloID = url.substring(url.lastIndexOf('/') + 1);
  var titulo = tituloID.replace(/%20/g, " ");

  useEffect(() => {
    getEncuesta(props.match.params.id)
  }, [props.match.params.id]);

  const getEncuesta = async (titulo) => {
    const encuestas = await getEncuestaRespID(titulo)
    setEncuestas(encuestas[0])
  };
  if (encuestas.P1respuesta < encuestas.P1valorref) {
    BenchP1 = "por debajo"
  }
  else {
    BenchP1 = "por encima"
  }
  if (encuestas.P2respuesta < encuestas.P2valorref) {
    BenchP2 = "por debajo"
  }
  else {
    BenchP2 = "por encima"
  }
  if (encuestas.P3respuesta < encuestas.P3valorref) {
    BenchP3 = "por debajo"
  }
  else {
    BenchP3 = "por encima"
  }
  if (encuestas.P4respuesta < encuestas.P4valorref) {
    BenchP4 = "por debajo"
  }
  else {
    BenchP4 = "por encima"
  }
  if (encuestas.P5respuesta < encuestas.P5valorref) {
    BenchP5 = "por debajo"
  }
  else {
    BenchP5 = "por encima"
  }

  console.log("Llgue a la encuesta", encuestas)

  return (
    <Page pageTitle={'Gracias por utilizar Api Benchmark'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <Link to="/Encuesta">
          <button class="block">Realizar otra encuesta</button>
        </Link>

        <img src={banner} width="100%" height="25%" alt="Logo" />
        <Paper className={clase5.paper}><h2>{encuestas.titulo}</h2></Paper>
        <br />
        <br />
        {encuestas.pregunta1 &&
          <Paper className={clase5.paper}>

            <p>En la pregunta, <b>"{encuestas.pregunta1}"</b>, usted selecciono <b>{encuestas.P1respuesta}</b>, su empresa se encuentra <b>{BenchP1}</b> del parametro valor general en el sector. </p>
          </Paper>
        }
        {encuestas.pregunta2 &&
          <Paper className={clase5.paper}>
            <p>En la pregunta, <b>"{encuestas.pregunta2}"</b>, usted selecciono <b>{encuestas.P2respuesta}</b>, su empresa se encuentra <b>{BenchP2}</b> del parametro valor general en el sector. </p>
          </Paper>
        }
        {encuestas.pregunta3 &&
          <Paper className={clase5.paper}>
            <p>En la pregunta, <b>"{encuestas.pregunta3}"</b>, usted selecciono <b>{encuestas.P3respuesta}</b>, su empresa se encuentra <b>{BenchP3}</b> del parametro valor general en el sector. </p>
          </Paper>
        }
        {encuestas.pregunta4 &&
          <Paper className={clase5.paper}>
            <p>En la pregunta, <b>"{encuestas.pregunta4}"</b>, usted selecciono <b>{encuestas.P4respuesta}</b>, su empresa se encuentra <b>{BenchP4}</b> del parametro valor general en el sector. </p>
          </Paper>
        }
        {encuestas.pregunta5 &&
          <Paper className={clase5.paper}>
            <p>En la pregunta, <b>"{encuestas.pregunta5}"</b>, usted selecciono <b>{encuestas.P5respuesta}</b>, su empresa se encuentra <b>{BenchP5}</b> del parametro valor general en el sector. </p>
          </Paper>
        }

      </Scrollbar>

      <Footer />
    </Page>

  );
}