import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Operador.css";
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import banner from '../../imagenes/banner1.jpg';
import PhoneInput from 'react-phone-input-2';
import MessageBox from './MessageBox';
import GoogleMaps from "simple-react-google-maps";
import FormControl from '@material-ui/core/FormControl';
import EditableTable from "./TableEncuesta"
import 'react-phone-input-2/lib/bootstrap.css';
import urlencode from 'urlencode';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

//importo 
import { getUsuario } from "../../controller/miApp.controller";

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Encuesta() {
  const clase5 = useStylesGrid();
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();
  const [region, setRegion] = React.useState('');


  useEffect(() => {
    getTReporte()
  }, []);

  let link = `https://api.whatsapp.com/send?phone=${phoneNumber}${message && `&text=${urlencode(message)}`
    }`;

  let handleLinkClick = () => {
    if (validatePhoneNumber() && validateMessage()) {
      window.open(link);
    }
  };



  const getTReporte = async () => {
    const reportes = await getUsuario()
    setReportes(reportes)
    setLoading(false)
  };

  const handleChange = (event) => {
    setRegion(event.target.value);
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

  const columnas = [
    { title: 'Pedido', field: 'pedido', filtering: true },
    { title: 'Nombre', field: 'nombre', filtering: true },
    { title: 'Apellido', field: 'apellido', filtering: true },
    { title: 'DNI', field: 'dni', filtering: true },
    { title: 'Telefono', field: 'telefono', filtering: false },
    { title: 'Obra Social', field: 'osbrasocial', filtering: false },
    { title: 'Provincia', field: 'provincia', filtering: false },
    {
      title: 'Estado Pedido', field: 'estadopedido', cellStyle: {
        backgroundColor: '#039be5',
        color: '#FFF'
      }, filtering: false
    },
  ];

  return (
    <Page pageTitle={'Seleccion operador'} >
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}><h2>Buscador de Farmacias / Envio de Estados</h2></Paper>

          </Grid>

        </Grid>
        <div style={{ padding: 24, width: "400px", display: 'flex', flex: 1 }}>

          <Link to="/Contacto">
            <Button variant="contained" color="Primary">Agregar y quitar Farmacias</Button>
          </Link>

        </div>

        <div style={{ padding: 24, width: "400px", display: 'flex', flex: 1 }}>
          <div className="container " >
            <GoogleMaps
              apiKey={"AIzaSyCPmgstXgIilvBde2JqvGDxg3NdxcAgAVg"}
              style={{ height: "300px", width: "1500px" }}
              zoom={14}
              center={{
                lat: -34.603581195827324, lng: -58.38154567992513
              }}
              markers={[

                { lat: -34.6121004821838, lng: -58.38101948717499 },
                { lat: -34.6079251785636, lng: -58.37224028465925 },
                { lat: -34.601432149455974, lng: -58.3684163 },
                { lat: -34.604042227170524, lng: -58.38597454069008 },
                { lat: -34.603581195827324, lng: -58.38154567992513 }

              ]}
            />
          </div>
        </div>
        <div style={{ padding: 24, width: "100%", display: 'block', flex: 1 }}>

          <h5>Envio de estado por Whatsapp</h5>
          <div style={{ padding: 24, width: "100%" }}>
            <EditableTable title={"Pedidos en curso"} data={reportes} columns={columnas} setData={setReportes}
              isLoading={loading} />
          </div>

          <div className="App">
          </div>
        </div>
      </Scrollbar>
      <Footer />
    </Page >
  );
}