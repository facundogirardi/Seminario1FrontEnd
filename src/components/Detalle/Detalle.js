import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Detalle.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../imagenes/banner1.jpg';
import 'react-phone-input-2/lib/bootstrap.css';

//importo 
import { getReporteID } from "../../controller/miApp.controller";

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

export default function Encuesta(props) {
  const clase5 = useStylesGrid();
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getReporte(props.match.params.id)
  }, [props.match.params.id]);

  const getReporte = async (id) => {
    const reportes = await getReporteID(id)
    setReportes(reportes[0])

  };

  const valor = (reportes.valor1 + reportes.valor2) / 2
  
  var resultado

  if (valor > 50) {
    resultado = 'COMPRAR';
  } else {
    resultado = 'NO COMPRAR';
  }
  if (valor == 50) {
    resultado = 'ANALISIS MANUAL';
  }

  return (
    <Page pageTitle={'Detalle de pedido'} >
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />
        <div style={{ padding: 24, width: "100%", display: 'block', flex: 1 }}>
          <h4>Detalle del pedido : {reportes.pedido}, para la Droga :  {reportes.droga} </h4>
          <br />
          <h3>Condiciones utilizadas prediccion de compra</h3>
          <br />
          <h4>1) Acuerdo exclusivo con el laboratorio {reportes.laboratorio} : {reportes.acuerdo} </h4>
          <h4>2) Unidades vendidas en los ultimos 2 meses : {reportes.cantidad} </h4>
          <h4>3) Condicion en construccion (Sprint 4) :</h4>
          <h4>4) Condicion en construccion (Sprint 4) :</h4>
          <br />
          <h3>Resultado : {resultado} </h3>

        </div>
      </Scrollbar>
      <Footer />
    </Page >
  );
}