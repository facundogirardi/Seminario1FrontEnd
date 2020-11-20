import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Encuesta.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router';
import EditableTable from "./TableEncuesta"
import banner from '../../imagenes/banner3.jpg';

//importo 
import { getEncuesta } from "../../controller/miApp.controller";

const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width: "100%",
  },
}));

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

  const clase4 = useStylesButton();
  const clase5 = useStylesGrid();
  const [isVisible, setVisible] = useState(false);
  const [encuestas, setEncuestas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([encuestas]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getTEncuesta()
  }, []);

  const redirect = async () => {
    //const ok = await encuestaCompletada()
    const ok = true
    if (ok) {
      history.push("/Contacto")
    }
  }

  const history = useHistory();
  const [sector, setSector] = React.useState('');
  const [tamaño, setTamaño] = React.useState('');

  const getTEncuesta = async () => {
    const encuestas = await getEncuesta()
    setEncuestas(encuestas)
    setLoading(false)
  };

  // prueba
  const filterValue = value => {
    if (value) {
      const filtered = data.filter(d => d.id.trim().length > 0);
      setData(filtered);
    } else {
      setData([encuestas]);
    }
    setChecked(value);
  };

  const columnas = [
    { title: 'Sector', field: 'sector', filtering: true },
    { title: 'Titulo', field: 'titulo', filtering: false },
    { title: 'Tamaño', field: 'tamaño', filtering: false },
  ];

  return (
    <Page pageTitle={'Usted esta en la ventana de consulta.'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}><h2>Realice su consulta</h2></Paper>
          </Grid>
        </Grid>
        <br />
        <div style={{ padding: 24, width: "100%" }}>
          <EditableTable title={"Encuestas"} data={encuestas} columns={columnas} setData={setEncuestas}
            deleteText={"¿Está seguro de eliminar la encuesta?"} isLoading={loading} />
        </div>
        <div className="App">
        </div>
      </Scrollbar>
      <Footer />
    </Page>
  );
}