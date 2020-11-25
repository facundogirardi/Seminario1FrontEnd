import * as React from 'react';
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Doc from './DocService';
import PdfContainer from './PdfContainer';
import banner from '../../imagenes/banner4.jpg';
import "./Resultado.css";

// Viene de la respuesta del cuestionario (JSON)
const pregunta1 = "Como estuvo el porcentaje de ventas en los ultimos 6 meses?"
const respuesta1 = "Decrecio un 30%"
const pregunta2 = "Debido a la pandemia, cuantos empleados se encuentran en home office?"
const respuesta2 = "20%"


export default class Demo extends React.PureComponent {
  constructor(props) {

    super(props);

    this.state = {

    };
  }

  createPdf = (html) => Doc.createPdf(html);

  render() {
    const { data: chartData } = this.state;

    return (
      <Page pageTitle={'Gracias por utilizar Api Benchmark'}>
        <Scrollbar
          style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>

          <Link to="/Encuesta">
            <button class="block">Realizar otra encuesta</button>
          </Link>
          <PdfContainer createPdf={this.createPdf}>
            <img src={banner} width="100%" height="25%" alt="Logo" />
            <Paper>
              <h4>El resultado de su encuesta es :</h4>
              <br></br>
              <p>Pregunta 1, <b>"{pregunta1}"</b>, selecciono <b>{respuesta1}</b>, usted se encuestra por encima del parametro valor general. </p>
              <p>Pregunta 2, <b>"{pregunta2}"</b>, selecciono <b>{respuesta2}</b>, usted se encuestra dentro del parametro valor general. </p>
            </Paper>
          </PdfContainer>
        </Scrollbar>

        <Footer />
      </Page>

    );
  }
}
