import ABMCheckbox from './ABM-Checkbox'
import ABMTexto from './ABM-Texto'
import ABMRadio from './ABM-Radio'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function EncuestasConfirmadas() {
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="on">
        <ABMRadio />
      </form>
    </div>
  )
}

