import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Operador.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EditableTable from "./TableEncuesta"
import banner from '../../imagenes/banner1.jpg';
import PhoneInput from 'react-phone-input-2';
import MessageBox from './MessageBox';
import 'react-phone-input-2/lib/bootstrap.css';
import urlencode from 'urlencode';

//importo 
import { getEncuesta } from "../../controller/miApp.controller";

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

export default function Encuesta() {
  const clase5 = useStylesGrid();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  let link = `https://api.whatsapp.com/send?phone=${phoneNumber}${message && `&text=${urlencode(message)}`
    }`;

  let handleLinkClick = () => {
    if (validatePhoneNumber() && validateMessage()) {
      window.location.assign(link);
    }
  };

  let validatePhoneNumber = () => {
    // eslint-disable-next-line
    if (phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
      return true;
    } else {
      setError('Invalid Phone Number');
      return false;
    }
  };

  let validateMessage = () => {
    if (message.length < 250) {
      return true;
    } else {
      setError('Message can contain only upto 250 characters');
      return false;
    }
  };

  return (
    <Page pageTitle={'Seccion Operador'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}><h2>Buscador de Farmacias</h2></Paper>
          </Grid>
        </Grid>
        <br />
        <div style={{ padding: 24, width: "100%" }}>

          <h2>Envio de Status</h2>
          <p id="error">{error}</p>
          <label>
            Numero telefonico
            <PhoneInput
              country={'in'}
              value={phoneNumber}
              placeholder="+54 987654321"
              onChange={(phone) => setPhoneNumber(phone)}
            />
          </label>
          <br />
          <br />
          <label>
            Mensaje
            <br />
            <MessageBox
              placeholder="Ingrese mensaje"
              value={message}
              onChange={(message) => setMessage(message)}
            />
          </label>
          <br />
          <button onClick={handleLinkClick} className="message-btn">
            Enviar
      </button>


        </div>
        <div className="App">
        </div>
      </Scrollbar>
      <Footer />
    </Page>
  );
}