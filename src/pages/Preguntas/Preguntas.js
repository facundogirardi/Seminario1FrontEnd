import Button from '@material-ui/core/Button'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import QuestionDialog from 'material-ui-shell/lib/containers/QuestionDialog/QuestionDialog'
import React, { useContext } from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { useSimpleValues } from 'base-shell/lib/providers/SimpleValues'
import "./Preguntas.css";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));
export default function Preguntas() {
  const intl = useIntl()
  const classes = useStyles();
  const [Rubro, setRubro] = React.useState('Rubro');
  const [cantidad, setValue1] = React.useState('cantidad');
  const [stock, setValue2] = React.useState('stock');
  const [velocidad, setValue3] = React.useState('velocidad');
  const [clima, setValue4] = React.useState('clima');
  const [entrega, setValue5] = React.useState('entrega');
  /* Rubros */
  const rubros = [
    {
      value: '01',
      label: '01 Elaboraciòn de productos alimenticios y/o bebidas'
    },  
     {
      value: '02',
      label: '02 Fabricación de productos textiles',
    },  
    {
      value: '03',
      label: '03 Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles',
    },  
    {
      value: '04',
      label: '04 Fabricación de papel y productos de papel',
    },  
    {
      value: '05',
      label: '05 Fabricación de sustancias y productos químicos',
    },    
  ];
  const handleChange = (event) => {
    setRubro(event.target.value0);
    setValue1(event.target.value1);
    setValue2(event.target.value2);
    setValue3(event.target.value3);
    setValue4(event.target.value4);
    setValue5(event.target.value5);
  };
  
  return (
    <Page pageTitle={intl.formatMessage({ id: 'Usted esta en la ventana de las preguntas.' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
        {intl.formatMessage({ id: ' ' })}
        <br />
        <div class="Cuadrado">
          <h1> Responda las siguientes preguntas :</h1>
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-select-rubro"
                label="Selecciona tu sector de actividad"
                select
                value0={Rubro}
                onChange={handleChange}
                helperText="">
                {rubros.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> 
              </form>
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">¿Hay recomposicion o liquidacion de stock de materias primas?</FormLabel>
              <RadioGroup aria-label="stock" name="stock" value2={stock} onChange={handleChange}>
                <FormControlLabel value="Si" control={<Radio />} label="Si" />
                <FormControlLabel value="No." control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">¿Que tipo de PyME avanza a mayor velocidad?</FormLabel>
              <RadioGroup aria-label="velocidad" name="velocidad" value3={velocidad} onChange={handleChange}>
                <FormControlLabel value="Industriales" control={<Radio />} label="Industriales" />
                <FormControlLabel value="SSI" control={<Radio />} label="SSI" />
                <FormControlLabel value="NS/NC" control={<Radio />} label="NS/NC" />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">¿Cual es el clima laboral en este segmento empresarial?</FormLabel>
              <RadioGroup aria-label="clima" name="clima" value4={clima} onChange={handleChange}>
                <FormControlLabel value="Muy Bueno" control={<Radio />} label="Muy Bueno" />
                <FormControlLabel value="Bueno" control={<Radio />} label="Bueno" />
                <FormControlLabel value="Malo" control={<Radio />} label="Malo" />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">¿Hay riesgo de falta de entrega de los proveedores?</FormLabel>
              <RadioGroup aria-label="entrega" name="entrega" value5={entrega} onChange={handleChange}>
                <FormControlLabel value="Si" control={<Radio />} label="Si" />
                <FormControlLabel value="No." control={<Radio />} label="No" />
                <FormControlLabel value="No corresponde" control={<Radio />} label="No corresponde" />
              </RadioGroup>
            </FormControl>

          </div>
          <div class="BotonEnviar">
          <Link to="/Encuesta">
            <IconButton edge="end" className={classes.SendIcon} color="inherit"  aria-label="menu">
              <Button 
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SendIcon />}>
                  Enviar
              </Button>
            </IconButton>
          </Link>
          </div>
        </div>  
      </Scrollbar>
    </Page>               
  );
}



