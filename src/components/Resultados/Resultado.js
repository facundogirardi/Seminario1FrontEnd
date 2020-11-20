import React from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import "./Resultado.css";
import banner from '../../imagenes/banner4.png';

// Viene de la respuesta del cuestionario (JSON)
const pregunta = "Promedio de edad"
const respuesta = "20"
const valorreferencia = "15"


function Forms(props) {

  return (
    <Page pageTitle={'Api Benchmark'}>
      <Scrollbar
        style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <img src={banner} width="100%" height="25%" alt="Logo" />

        <Link to="/Encuesta">
          <button class="block">Realizar otra encuesta</button>
        </Link>
        <br></br>

        <span>
         <h2>Muchas gracias por utilizar nuestro Benchmarck</h2>
         <h4>El resultado de su encuesta es :</h4>
          <br></br>
          <p>Pregunta 1, "{pregunta}", usted selecciono {respuesta}, valor general {valorreferencia}. </p>         

        </span>

      </Scrollbar>
      <Footer />
    </Page >
  )
}

  export default Forms;

