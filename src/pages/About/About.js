import 'github-markdown-css'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import React from 'react'
import "./About.css";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar'
import { injectIntl } from 'react-intl'
import logo from './boton.png';
import Footer from '../Footer/Footer';

const AboutPage = ({ intl }) => {
  return (
    <Page pageTitle={intl.formatMessage({ id: 'Informacion' })}>
      <Scrollbar
        style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        {intl.formatMessage({ id: ' ' })}
        <br />
        <div class="Cuadrado">
        
        <h1>API Benchmarking</h1>
        <h2>Landing</h2>
        <p>Encontraremos con dos botones, uno para acceder de manera externa (usuario PyME), y otro para el acceso para el personal del Observatorio</p>
        <p>Cada uno de estos botones tiene vistas separadas para separar las vistas de administrador y usuario</p>
        <img src={logo} />
        <h2>Encuesta</h2>
        <p>El usuario podra realizar una breve encuesta, y luego completar con sus datos para poder tener traqueo de las empresas que usan el servicio </p>
        <h2>Resultado</h2>
        <p>El usuario podra visualizarlo en forma de grafico, simple y rapido de comprander</p>
        <h2>ABM</h2>
        <p>Alta, baja y modificacion de preguntas por parte del personal del Observatorio, estas preguntas se veran reflejadas en la pantallas "Encuesta"</p>
    </div> 
    </Scrollbar>
    <Footer/>
    </Page>
  )
}
export default injectIntl(AboutPage)
