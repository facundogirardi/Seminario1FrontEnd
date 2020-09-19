import Page from 'material-ui-shell/lib/containers/Page/Page'
import QuestionDialog from 'material-ui-shell/lib/containers/QuestionDialog/QuestionDialog'
import React, { useContext } from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { useSimpleValues } from 'base-shell/lib/providers/SimpleValues'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const DIALOG_ID = 'ABM'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const tipodePregunta = [
  {
    value: '01',
    label: 'Preguntas de Checkbox'
  },  
   {
    value: '02',
    label: 'Preguntas de Radio',
  },  
  {
    value: '03',
    label: 'Preguntas de Texto',
  },     
];

const HomePage = () => {
  const [tipoDePregunta, setPregunta] = React.useState('Pregunta');
  const intl = useIntl()
  const classes = useStyles();
  const { setValue } = useSimpleValues()
  const [cantidad, setValue1] = React.useState('cantidad');
  const [stock, setValue2] = React.useState('stock');
  const [velocidad, setValue3] = React.useState('velocidad');

  const handleChange = (event) => {
    setPregunta(event.target.value0);
    setValue1(event.target.value1);
    setValue2(event.target.value2);
    setValue3(event.target.value3);
    
  };
  

  return (
    <Page pageTitle={intl.formatMessage({ id: 'Usted esta en la ventana de administrador.' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
        {intl.formatMessage({ id: ' ' })}
        <br />
        <div class="Cuadrado">
          <h1>Elija el tipo de pregunta que desee:</h1>
          <div>
          <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-select-rubro"
                  label="Tipo de Pregunta"
                  select
                  value0={tipodePregunta}
                  onChange={handleChange}
                  helperText="">
                  {tipodePregunta.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField> 
          </form>
          </div>
        </div>
      </Scrollbar>
    </Page>
  )
}
export default HomePage
