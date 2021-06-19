import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import Page from "material-ui-shell/lib/containers/Page/Page";
import "./Detalle.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import banner from "../../imagenes/banner1.jpg";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "react-phone-input-2/lib/bootstrap.css";

//importo
import { getReporteID } from "../../controller/miApp.controller";

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    width: "100%",
    color: theme.palette.text.secondary,
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Encuesta(props) {
  const clase5 = useStylesGrid();
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  useEffect(() => {
    getReporte(props.match.params.id);
  }, [props.match.params.id]);

  const getReporte = async (id) => {
    const reportes = await getReporteID(id);
    setReportes(reportes[0]);
  };

  console.log("reporte", reportes);

  const vendido = 12.5;
  const valor =
    reportes.valormoroso +
    reportes.valorcronologico +
    reportes.valoracuerdo +
    vendido;

  var resultado;

  console.log("valor", valor);
  if (valor > 50) {
    resultado = "COMPRAR";
  } else {
    resultado = "NO COMPRAR";
  }
  if (valor == 50) {
    resultado = "ANALISIS MANUAL";
  }

  return (
    <Page pageTitle={"Seleccion Gerente"}>
      <Scrollbar
        style={{ height: "93.4%", width: "100%", display: "flex", flex: 1 }}
      >
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}>
              <h2>Detalle de Pronóstico de Compra</h2>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <div style={{ padding: 24, width: "100%", display: "block", flex: 1 }}>
          <h4 style={{ color: "red" }}>Droga : {reportes.droga} </h4>
          <br />
          <div>
          <h4>Condiciones utilizadas para la prediccion de compra</h4>
          <br />
          <condiciones>
          ○  Acuerdo exclusivo con el laboratorio {reportes.laboratorio} :{" "}
            {reportes.acuerdo}{" "}
          </condiciones>
          <condicione>
            Acuerdo con el laboratorio SI : 20%, NO : 5%          {" "}  
          </condicione>

          <condiciones>
          ○ Unidades vendidas en los ultimos 2 meses :{" "}
            {reportes.cantidadvendida}{" "}
          </condiciones>
          <condicione>
            Unidades vendidas promedio 2000u            
          </condicione>

          <condiciones>
          ○ Prepaga cumple en terminos de pago (morosidad permitida, 2 meses) :{" "}
            {reportes.moroso}{" "}
          </condiciones>
          <condicione>
            Prepaga cumple con el pago SI : 25%, NO : 0%           
          </condicione>

          <condiciones>
          ○ Es una drogra con necesidad CRONOLOGICA : {reportes.cronologico}{" "}
          </condiciones>
          <condicione>
            La droga es para tratamiento cronologico? SI : 20%, NO : 7.5%           
          </condicione>
          </div>
          <br />
          <br />
          <h3 style={{ backgroundColor: "lightblue" }}>
            {" "}
            {reportes.resultado}{" "}
          </h3>
          <br />
          </div>
      </Scrollbar>
      <Footer />
    </Page>
  );
}
