import React from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import "./Resultado.css";
import banner from '../../imagenes/banner4.jpg';

// Viene de la respuesta del cuestionario (JSON)
const pregunta1 = "Como estuvo el porcentaje de ventas en los ultimos 6 meses?"
const respuesta1 = "Decrecio un 30%"
const valorreferencia1 = "15%"
const pregunta2 = "Debido a la pandemia, cuantos empleados se encuentran en home office?"
const respuesta2 = "20%"
const valorreferencia2 = "20%"


function Resultado(props) {

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
          <p>Pregunta 1, <b>"{pregunta1}"</b>, selecciono <b>{respuesta1}</b>, usted se encuestra por encima del parametro valor general. </p>        
          <p>Pregunta 2, <b>"{pregunta2}"</b>, selecciono <b>{respuesta2}</b>, usted se encuestra dentro del parametro valor general. </p>    

        </span>

      </Scrollbar>
      <Footer />
    </Page >
  )
}

  export default Resultado;

