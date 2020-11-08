import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Encuesta.css";
import Footer from '../Footer/Footer';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
    width:"98%",
    margin: "0 10px",
    color: theme.palette.text.secondary,
  },
}));

export default function Encuesta() {
  const clase1 = useStylesSelect();
  const clase2 = useStylesSelect();
  const clase3 = useStylesSelect();
  const clase4 = useStylesButton();
  const clase5 = useStylesGrid();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Page pageTitle={'Usted esta en la ventana de consulta.'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={clase5.paper}><h2>Realice su consulta</h2></Paper>
        </Grid>
      </Grid>
      <br/>
      <Card className={clase1.root}>
      <CardContent>
      <FormControl  variant="outlined" className={clase1.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Seleccione el rubro de su empresa</InputLabel>
        <Select
          native
          value={state.Sector}
          onChange={handleChange}
          inputProps={{

          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Elaboraciòn de productos alimenticios y/o bebidas</option>
          <option value={20}>Fabricación de productos textiles</option>
          <option value={30}>Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles</option>
          <option value={40}>Fabricación de papel y productos de papel</option>
          <option value={50}>Fabricación de sustancias y productos químicos</option>

        </Select>
      </FormControl>
      <br/>
      <br/>
      <FormControl variant="outlined" className={clase2.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Seleccione el tamaño de su empresa</InputLabel>
        <Select
          native
          value={state.Tamaño}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={11}>Pequeña</option>
          <option value={21}>Mediana</option>
        </Select>
      </FormControl>
      <br/>
      <br/>
      <FormControl variant="outlined" className={clase3.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Seleccione la encuesta a realizar</InputLabel>
        <Select
          native
          value={state.Consulta}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={31}>Nombre de la consulta numero 1</option>
          <option value={32}>Nombre de la consulta numero 2</option>
          <option value={33}>Nombre de la consulta numero 3</option>
        </Select>
      </FormControl>
      </CardContent>
      </Card>
      <br/>
     
          ACA DEBE APARECER LA ENCUESTA SELECCIONADA
          <br/>
         
        <Link to="/Contacto">
        <Button
        variant="contained"
        color="Primary"
        className={clase4.button}
        startIcon={<NavigateNextIcon />}
      >
        Siguiente
      </Button>
      </Link>
      </Scrollbar>
    <Footer/>
    </Page>
  );
}