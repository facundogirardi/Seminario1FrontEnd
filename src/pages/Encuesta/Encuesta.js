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
    <Page pageTitle={'Usted esta en la ventana de consulta.'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={clase5.paper}><h2>Realizar una nueva consulta</h2></Paper>
        </Grid>
      </Grid>
      <br/>
      <Card className={clase1.root}>
      <CardContent>
      <FormControl variant="outlined" className={clase2.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Sector al cual pertenece la consulta</InputLabel>
        <Select
          native
          value={state.Sector}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Sector 1</option>
          <option value={20}>Sector 2</option>
          <option value={30}>Sector 3</option>
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
      <FormControl variant="outlined" className={clase2.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Seleccione su consulta</InputLabel>
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
        </Select>
      </FormControl>
      </CardContent>
      </Card>
      <br/>
      <Card className={clase1.root}>
      <CardContent>
      <FormControl component="fieldset">
        <FormLabel component="legend">Tamaño de la empresa:</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" onChange={handleChangeRadioTamaño}>
            <FormControlLabel value="14" control={<Radio />} label="Pequeña" />
            <FormControlLabel value="25" control={<Radio />} label="Mediana" />
          </RadioGroup>
        </FormControl>
          </CardContent>
          </Card> 
          <br/>
        <Card className={clase1.root}>
      <CardContent>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sus ingresos anuales..</FormLabel>
          <RadioGroup aria-label="gender" name="gender1"  onChange={handleChangeRadioIngresos}>
            <FormControlLabel value="42" control={<Radio />} label="Aumentaron...%" />
            <FormControlLabel value="13" control={<Radio />} label="Se mantuvieron" />
            <FormControlLabel value="12" control={<Radio />} label="Bajaron...%" />
          </RadioGroup>
        </FormControl>
        <form className={clase3.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Ingrese dato adicional" variant="outlined" />
        </form>
          </CardContent>
          </Card> 
          <br/>
        <Card className={clase1.root}>
      <CardContent>
      <FormControl component="fieldset">
        <FormLabel component="legend">Sus ventas anuales..</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" onChange={handleChangeRadioVentas}>
            <FormControlLabel value="42" control={<Radio />} label="Aumentaron...%" />
            <FormControlLabel value="13" control={<Radio />} label="Se mantuvieron" />
            <FormControlLabel value="12" control={<Radio />} label="Bajaron...%" />
          </RadioGroup>
        </FormControl>
        <form className={clase3.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Ingrese dato adicional" variant="outlined" />
        </form>
          </CardContent>
          </Card> 
        <br/>
      <Card className={clase1.root}>
      <CardContent>
      <h2>Información de contacto</h2>
          <form className={clase3.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Ingrese el nombre de la empresa *" />
          <TextField id="standard-basic" label="Ingrese el email de la empresa *" />
          <TextField id="standard-basic" label="Ingrese el telefono de la empresa *" />
        </form>
          </CardContent>
          </Card> 
        <Link to="/Resultados">
        <Button
        variant="contained"
        color="Primary"
        className={clase4.button}
        startIcon={<CloudUploadIcon />}
      >
        Realizar Consulta
      </Button>
      </Link>
      </Scrollbar>
    <Footer/>
    </Page>
  );
}