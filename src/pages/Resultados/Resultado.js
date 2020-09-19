import React from 'react';
import "./Resultado.css";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Compañia, Tipo, FacturacionPromedio, CarteraDePedidos) {
  return { Compañia, Tipo, FacturacionPromedio, CarteraDePedidos};
}

const rows = [
  createData('Coca Cola', "Grande", "6%", "No vario"),
  createData('Pepsi', "Grande", "-3%", "Disminuyo"),
  createData('Apple', "Grande", "13%", "Aumento"),
  createData('Microsoft', "Grande", "2%", "No vario"),
  createData('McDonalds', "Grande", "-4%", "Disminuyo"),
];

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
        </div>
        <div class="BotonAtras">
          <IconButton edge="end" className={classes.ArrowBackIcon} color="inherit"  aria-label="menu">
            <Button 
              variant="contained"
              color="inherit"
              className={classes.button}
              startIcon={<ArrowBackIcon />}
              >
              <Link to="/Encuesta"><center>Atras</center></Link>
            </Button>
          </IconButton>
        </div>
        <div class="BotonGenerar">
          <IconButton edge="end" className={classes.PictureAsPdfIcon} color="inherit"  aria-label="menu">
            <Button 
                variant="contained"
                color="inherit"
                className={classes.button}
                startIcon={<PictureAsPdfIcon />}>
                Generar PDF
            </Button>
          </IconButton>
        </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell align="center">Compañia</TableCell>
                  <TableCell align="center">Tipo</TableCell>
                  <TableCell align="center">FacturacionPromedio</TableCell>
                  <TableCell align="center">CarteraDePedidos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Compañia}>
                    <TableCell component="th" scope="row">
                      <center>{row.Compañia}</center>
                    </TableCell>
                    <TableCell align="center">{row.Tipo}</TableCell>
                    <TableCell align="center">{row.FacturacionPromedio}</TableCell>
                    <TableCell align="center">{row.CarteraDePedidos}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Scrollbar>
    </Page>
    
  );
}
