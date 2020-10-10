import React from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import Button from '@material-ui/core/Button';
import ABMTipo from "./ABM-Tipo"
import ListaEncuesta from "./Lista-Encuesta"
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';



function ABM(){


  function showAlert1() {
    var myText = "Archivo cargado exitosamente en la base de datos";
    alert (myText);
  }

  function showAlert2() {
    var myText = "Cuestionario generado exitosamente!";
    alert (myText);
  }

  return (
    <Page pageTitle={'Administrador de encuestas'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
      <ABMTipo/>
      </Scrollbar>
      <Footer/>
    </Page>
  );
}


export default ABM;