import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import QuestionDialog from 'material-ui-shell/lib/containers/QuestionDialog/QuestionDialog'
import React, { useContext } from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { useSimpleValues } from 'base-shell/lib/providers/SimpleValues'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';

/* Ubicaciones */
const regiones = [
  {
    value: 'Buenos Aires',
    label: 'Buenos Aires',
  },
  {
    value: 'Capital',
    label: 'Capital Federal',
  },
   {
    value: 'Catamarca',
    label: 'Catamarca',
  },
   {
    value: 'Chaco',
    label: 'Chaco',
  },
   {
    value: 'Chubut',
    label: 'Chubut',
  },
   {
    value: 'Córdoba',
    label: 'Córdoba',
  },  
   {
    value: 'Entre Ríos',
    label: 'Entre Ríos',
  },
   {
    value: 'Corrientes',
    label: 'Corrientes',
  },
   {
    value: 'Formosa',
    label: 'Formosa',
  },
   {
    value: 'Jujuy',
    label: 'Jujuy',
  },
   {
    value: 'La Pampa',
    label: 'La Pampa',
  },
   {
    value: 'La Rioja',
    label: 'La Rioja',
  },
   {
    value: 'Mendoza',
    label: 'Mendoza',
  },
     {
    value: 'Misiones',
    label: 'Misiones',
  },
   {
    value: 'Neuquén',
    label: 'Neuquén',
  },
   {
    value: 'Río Negro',
    label: 'Río Negro',
  },
   {
    value: 'Salta',
    label: 'Salta',
  },
   {
    value: 'San Juan',
    label: 'San Juan',
  },
   {
    value: 'San Luis',
    label: 'San Luis',
  },
   {
    value: 'Santa Cruz',
    label: 'Santa Cruz',
  },
   {
    value: 'Santa Fe',
    label: 'Santa Fe',
  },
   {
    value: 'Santiago del Estero',
    label: 'Santiago del Estero',
  },
   {
    value: 'Tierra del Fuego',
    label: 'Tierra del Fuego',
  },  
   {
    value: 'Tucumán',
    label: 'Tucumán',
  },  
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

const DIALOG_ID = 'demo_dialog'

const HomePage = () => {
  const intl = useIntl()
  const { setValue } = useSimpleValues()
  const classes = useStyles();
  const [region, setRegion] = React.useState('Region');
  const [tamaño, setValue1] = React.useState('tamaño');

  const handleChange = (event) => {
    setRegion(event.target.value1);
    setValue1(event.target.value2);
  };

    return (
    <Page pageTitle={intl.formatMessage({ id: 'Para realizar su simulacion, por favor responda la siguiente encuesta' })}>
    <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
      <div className="Cuadrado">
      <h1> </h1>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Tamaño de su empresa</FormLabel>
          <RadioGroup aria-label="tamaño" name="tamaño" value2={tamaño} onChange={handleChange}>
            <FormControlLabel value="Micro : 0-9 ocupados." control={<Radio />} label="Micro : 0-9 ocupados." />
            <FormControlLabel value="Pequeña : 10-50 ocupados." control={<Radio />} label="Pequeña : 10-50 ocupados." />
            <FormControlLabel value="Mediana : 51-250 ocupados." control={<Radio />} label="Mediana : 51-250 ocupados." />
            <FormControlLabel value="Mediana Grande : 251-800 ocupados." control={<Radio />} label="Mediana Grande : 251-800 ocupados." />
            <FormControlLabel value="Grande : Mas de 800 ocupados." control={<Radio />} label="Grande : Mas de 800 ocupados." />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic1" label="Mail"/><br></br>
          <TextField id="standard-basic2" label="Razon social" /><br></br>
          <TextField
            id="standard-select-region"
            label="Elija su region"
            select
            value1={region}
            onChange={handleChange}
            helperText="">
            {regiones.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> 
        </form>
      </div>
      <IconButton edge="end" className={classes.SendIcon} color="inherit" aria-label="menu">
      <Button 
          variant="contained"
          color="inherit"
          className={classes.button}
          startIcon={<SendIcon />}>
          Enviar</Button>
      </IconButton>
    </div>   
    </Scrollbar>
    </Page>
  )
}
export default HomePage
