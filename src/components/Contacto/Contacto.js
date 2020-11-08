import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Contacto.css";
import Footer from '../Footer/Footer';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TimelineIcon from '@material-ui/icons/Timeline';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useHistory} from 'react-router';

//importo llamada a endpoint
import { guardarContacto } from "../../controller/miApp.controller";

const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
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
    width: "98%",
    margin: "0 10px",
    color: theme.palette.text.secondary,
  },
}));

export default function Encuesta() {
  const clase1 = useStylesCards();
  const clase3 = useStylesText();
  const clase4 = useStylesButton();
  const clase5 = useStylesGrid();

  const history = useHistory();
  const [razonsocial, setRazonSocial] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [region, setRegion] = React.useState("");
  const [tamaño, setTamaño] = React.useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleRazonSocial = (event) => {
    setRazonSocial(event.target.value);
  }
  const handleRegion = (event) => {
    setRegion(event.target.value);
  }
  const handleTamaño = (event) => {
    setTamaño(event.target.value);
  }

  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }

    return true;
  };

  const subirDatos = async function () {
    let archivoDatos = false;
    console.log("razonsocial", razonsocial);
    console.log("email", email);
    console.log("region", region);
    console.log("tamaño", tamaño);
    if (!isEmpty(razonsocial) && !isEmpty(email) && !isEmpty(region) && !isEmpty(tamaño)) {

      archivoDatos = await guardarContacto(razonsocial, email, region, tamaño);
    }
    else{
      alert("Llenar datos.")
    }
    return archivoDatos
  }

  const redirect = async () => {
    const ok = await subirDatos()
    if (ok) {
      history.push("/Resultados")
    }
  }

  return (
    <Page pageTitle={'Usted esta en la ventana de Contacto'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}><h2>Información de contacto</h2></Paper>
          </Grid>
        </Grid>
        <br />
        <Card className={clase1.root}>
          <CardContent>
            <form className={clase3.root} autoComplete="off">
              <TextField
                required
                id="RazonSocial"
                label="Razon social"
                inputProps={{
                  onChange: (event) => handleRazonSocial(event),
                }}
              />
              <TextField
                required
                id="email"
                label="Correo electronico"
                inputProps={{
                  onChange: (event) => handleEmail(event),
                }}
              />
              <TextField
                required
                id="region"
                label="Region"
                inputProps={{
                  onChange: (event) => handleRegion(event),
                }}
              />
            </form>
            <br /> <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Tamaño de su empresa</FormLabel>
              <RadioGroup onChange={handleTamaño}>
                <FormControlLabel required value="Micro" control={<Radio />} label="Micro: 0-9 ocupados" />
                <FormControlLabel required value="Pequeña" control={<Radio />} label="Pequeña: 10-50 ocupados" />
                <FormControlLabel required value="Mediana" control={<Radio />} label="Mediana: 51-250 ocupados" />
                <FormControlLabel required value="Mediana Grande" control={<Radio />} label="Mediana Grande: 251-800 ocupados" />
                <FormControlLabel required value="Grande" control={<Radio />} label="Grande: Más de 800 ocupados" />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
        <Link to="/Encuesta">
          <Button
            variant="contained"
            color="Primary"
            className={clase4.button}
            startIcon={<ArrowBackIosIcon />}
          >
            Atras
      </Button>
        </Link>
          <Button
            variant="contained"
            color="Primary"
            className={clase4.submit}
            startIcon={<TimelineIcon />}
            onClick={() => { redirect() }}
          >
            Generar resultados
      </Button>
      </Scrollbar>
      <Footer />
    </Page>
  );
}