import React from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import Button from '@material-ui/core/Button';
import ABMTipo from "./ABM-Tipo"
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

function ABM(){

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
        <Button variant="contained" color="primary" component="span">
            Cargar Archivo
        </Button>
      
      <Link to="/Encuesta">
      <IconButton width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
        <Button 
          variant="contained"
          color="primary"
          className={AddIcon}>
          Generar Cuestionario
        </Button>
      </IconButton>
      </Link>
      </div>
      </Scrollbar>
      <Footer/>
    </Page>
  );
}

export default ABM;