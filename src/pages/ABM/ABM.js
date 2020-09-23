import React from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import Button from '@material-ui/core/Button';
import ABMTexto from "./ABM-Texto"
import ABMRadio from "./ABM-Radio"


function ABM(){

  return (
    <Page pageTitle={'Usted esta en la ventana de administrador.'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
      <ABMRadio/>
      <div className="Cuadrado">
        <h2>Para cargar el Excel:</h2>
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Cargar Archivo
          </Button>
        </label>
      </div>
      </Scrollbar>
      <Footer/>
    </Page>
  );
}

export default ABM;