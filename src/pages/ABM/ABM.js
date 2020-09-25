import React from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import Button from '@material-ui/core/Button';
import ABMTipo from "./ABM-Tipo"
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
    <Page pageTitle={'Usted esta en la ventana de administrador.'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
      <ABMTipo/>
      <div className="Cuadrado">
        <h2>Para cargar el Excel:</h2>
        <label htmlFor="contained-button-file">
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        </label>
        <br/>
        <br/>
      <IconButton width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
        <Button 
            onClick={showAlert1}
            variant="contained"
            color="primary"
            className={AddIcon}>
            Cargar Archivo
        </Button>
      </IconButton>
      <IconButton width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
        <Button
          onClick={showAlert2}
          variant="contained"
          color="primary"
          className={AddIcon}>
          Generar Cuestionario
        </Button>
      </IconButton>
      </div>
      </Scrollbar>
      <Footer/>
    </Page>
  );
}


export default ABM;