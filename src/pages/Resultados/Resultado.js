import React from 'react';
import "./Resultado.css";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page/Page'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
    const classes = useStyles();
    const intl = useIntl()
 
  return (
    <Page pageTitle={intl.formatMessage({ id: 'Usted esta en la ventana de los resultados.' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
        {intl.formatMessage({ id: ' ' })}
        <br />

        <div class="Cuadrado">
          <h1> Resultados de su consulta :</h1>
        <div>
        </div>
          <IconButton edge="end" className={classes.PictureAsPdfIcon} color="inherit"  aria-label="menu">
          <Button 
              variant="contained"
              color="inherit"
              className={classes.button}
              startIcon={<PictureAsPdfIcon />}>
              Generar PDF</Button>
          </IconButton>
        </div> 
      </Scrollbar>
    </Page>
    
  );
}
