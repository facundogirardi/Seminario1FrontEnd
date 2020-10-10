import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Contacto.css";
import Footer from '../Footer/Footer';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineIcon from '@material-ui/icons/Timeline';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
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
  const clase1 = useStylesCards();
  const clase2 = useStylesSelect();
  const clase3 = useStylesText();
  const clase4 = useStylesButton();
  const clase5 = useStylesGrid();

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  
  const handleChangeRadioVentas = (event) => {
    setValue(event.target.value);
  };
  
  const handleChangeRadioIngresos = (event) => {
    setValue(event.target.value);
  };

  const handleChangeRadioTamaño = (event) => {
    setValue(event.target.value);
  };

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Page pageTitle={'Usted esta en la ventana de Contacto'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={clase5.paper}><h2>Información de contacto</h2></Paper>
        </Grid>
      </Grid>
      <br/>
      <Card className={clase1.root}>
      <CardContent>
        <form className={clase3.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Razon social *" />
          <TextField id="standard-basic" label="Correo electronico *" />
          <TextField id="standard-basic" label="Region *" />
           </form>
        <br/> <br/>
        <FormControl component="fieldset">
        <FormLabel component="legend">Tamaño de su empresa</FormLabel>
          <RadioGroup aria-label="gender" name="gender1"  onChange={handleChangeRadioIngresos}>
            <FormControlLabel value="01" control={<Radio />} label="Micro: 0-9 ocupados" />
            <FormControlLabel value="02" control={<Radio />} label="Pequeña: 10-50 ocupados" />
            <FormControlLabel value="03" control={<Radio />} label="Mediana: 51-250 ocupados" />
            <FormControlLabel value="04" control={<Radio />} label="Mediana Grande: 251-800 ocupados" />
            <FormControlLabel value="05" control={<Radio />} label="Grande: Más de 800 ocupados" />
          </RadioGroup>
        </FormControl>
          </CardContent>
          </Card> 
          
        <Link to="/Resultados">
        <Button
        variant="contained"
        color="Primary"
        className={clase4.button}
        startIcon={<TimelineIcon />}
      >
        Generar resultados
      </Button>
      </Link>
      </Scrollbar>
    <Footer/>
    </Page>
  );
}