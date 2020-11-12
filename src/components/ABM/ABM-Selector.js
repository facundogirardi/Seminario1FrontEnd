import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Elija el tipo de encuesta que quiere realizar:</h1>
      <Link to='/ABM-Checkbox'>
        <Button variant="outlined" color="primary">
          Preguntas con respuesta multiple
      </Button>
      </Link>
      <Link to='/ABM-Radio'>
        <Button variant="outlined" color="secondary">
          Preguntas con respuesta unica
      </Button>
      </Link>
      <Link to='/ABM-Texto'>
        <Button variant="outlined" color="primary" >
          Preguntas con respuesta de texto
      </Button>
      </Link>
    </div>
  );
}
