import React from 'react';
import "./Resultado.css";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

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
 
  return (
    <div class="Cuadrado">
      <h1> Resultado de su consulta :</h1>
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
    
  );
}
