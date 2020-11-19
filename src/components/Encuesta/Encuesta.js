import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Encuesta.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router';
import EditableTable from "./TableEncuesta"
import MaterialTable from "material-table";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import banner from '../../imagenes/banner3.jpg';

//importo 
import { getEncuesta } from "../../controller/miApp.controller";
import { ContactSupportOutlined } from '@material-ui/icons';

const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

const useStylesSelect = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStylesCards = makeStyles({
  root: {
    width: "98%",
    margin: '0 10px',
    padding: "10px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStylesText = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: "98%",
    margin: "0 10px",
    color: theme.palette.text.secondary,
  },
}));

export default function Encuesta() {
  const clase1 = useStylesCards();
  const clase3 = useStylesText();
  const clase2 = useStylesSelect();
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

  const handleSector = (event) => {
    setSector(event.target.values);
  }
  const handleTamaño = (event) => {
    setTamaño(event.target.valuet);
  }

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
    { title: 'Sector', field: 'sector',
    filterComponent: props => {
      console.log("Props: ", props);
      return (
        <FormControlLabel
          control={
              <Select
                native
                pl
                checked={checked}
                onChange={e => filterValue(e.target.checked)}
                onClick={() => setVisible(true)}>
                <option values={setSector.values} />
                <option values={"sector1"}>Elaboraciòn de productos alimenticios y/o bebidas</option>
                <option values={"sector2"}>Fabricación de productos textiles</option>
                <option values={"sector3"}>Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles</option>
                <option values={"sector4"}>Fabricación de papel y productos de papel</option>
                <option values={"sector5"}>Fabricación de sustancias y productos químicos</option>
              </Select>
          }
          labelPlacement="end"
        />
      );
    }
  },
    { title: 'Titulo', field: 'titulo',filtering: false },
    { title: 'Tamaño', field: 'tamaño',filtering: false },
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
        <Button
          variant="contained"
          color="Primary"
          className={clase4.button}
          startIcon={<NavigateNextIcon />}
          onClick={() => { redirect() }}
        >
          Siguiente
      </Button>
      </Scrollbar>
      <Footer />
    </Page>
  );
}
