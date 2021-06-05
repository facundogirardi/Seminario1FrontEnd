import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Gerente.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EditableTable from "./TableEncuesta"
import banner from '../../imagenes/banner3.jpg';

//importo 
import { getReporte } from "../../controller/miApp.controller";

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

export default function Reporte() {


  const clase5 = useStylesGrid();
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTReporte()
  }, []);

  const getTReporte = async () => {
    const reportes = await getReporte()
    setReportes(reportes)
    setLoading(false)
  };

  const columnas = [
    { title: 'Droga', field: 'droga', filtering: true },
    { title: 'Marca', field: 'marca', filtering: true },
    { title: 'Laboratorio', field: 'laboratorio', filtering: true },
    { title: 'Presentacion', field: 'presentacion', filtering: true },
    { title: 'Precio (U$D)', field: 'precio', filtering: false, type: 'currency', align: 'left' },
    {
      title: 'Resultado', field: 'resultado', cellStyle: {
        backgroundColor: '#039be5',
        color: '#FFF'
      }, filtering: false
    },
  ];

  return (
    <Page pageTitle={'Seleccion operador'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}><h2>Reporte de Pronóstico de Compra</h2></Paper>
          </Grid>
        </Grid>
        <br />
        <div style={{ padding: 24, width: "100%" }}>
          <EditableTable title={"Productos (< a 5 unidades)"} data={reportes} columns={columnas} setData={setReportes}
            isLoading={loading} />
        </div>
        <div className="App">
        </div>

      </Scrollbar>
      <Footer />
    </Page>
  );
}