import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Operador.css";
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import React, { useEffect, useState, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import banner from '../../imagenes/banner1.jpg';
import PhoneInput from 'react-phone-input-2';
import MessageBox from './MessageBox';
import GoogleMaps from "simple-react-google-maps";
import 'react-phone-input-2/lib/bootstrap.css';
import urlencode from 'urlencode';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

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
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
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
      setError('Numero telefonico invalido');
      return false;
    }
  };

  let validateMessage = () => {
    if (message.length < 50) {
      return true;
    } else {
      setError('El mensaje puede contener hasta 50 caracteres');
      return false;
    }
  };

  return (
    <Page pageTitle={'Seleccione operador'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}><h2>Buscador de Farmacias</h2></Paper>

          </Grid>

        </Grid>
        <div style={{ padding: 24, width: "400px", display: 'flex', flex: 1 }}>

          <Link to="/Contacto">
            <Button variant="contained" color="secondary">Agregar y quitar Farmacias</Button>
          </Link>

        </div>
        <div style={{ padding: 24, width: "400px", display: 'flex', flex: 1 }}>

          <InputBase
            className={clase5.input}
            placeholder="Buscar direccion"
            inputProps={{ 'aria-label': 'Buscar direccion' }}
          />
          <IconButton type="submit" className={clase5.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider className={clase5.divider} orientation="vertical" />
          <IconButton color="primary" className={clase5.iconButton} aria-label="directions">
            <DirectionsIcon />
          </IconButton>
        </div>


        <div style={{ padding: 24, width: "400px", display: 'flex', flex: 1 }}>
          <div className="container " >
            <GoogleMaps
              apiKey={"AIzaSyCPmgstXgIilvBde2JqvGDxg3NdxcAgAVg"}
              style={{ height: "300px", width: "1500px" }}
              zoom={14}
              center={{
                lat: -34.6121004821838, lng: -58.38101948717499
              }}
              markers={[

                { lat: -34.6121004821838, lng: -58.38101948717499 },
                { lat: -34.603581195827324, lng: -58.38154567992513 }

              ]}
            />
          </div>
        </div>
        <div style={{ padding: 24, width: "100%", display: 'block', flex: 1 }}>

          <h5>Envio de Status por Whatsapp</h5>
          <p id="error">{error}</p>
          <label>
            Numero telefonico
            <PhoneInput
              country={'ar'}
              value={phoneNumber}
              placeholder="+54 1130669664"
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

          <Button onClick={handleLinkClick} className="message-btn" variant="contained" color="secondary">
            Enviar
           </Button>

           
        </div>
        <div className="App">
        </div>

      </Scrollbar>
      <Footer />
    </Page>
  );
}