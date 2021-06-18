import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import Page from "material-ui-shell/lib/containers/Page/Page";
import "./Historico.css";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PieChart } from "react-minimal-pie-chart";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router";
import banner from "../../imagenes/banner2.jpg";

//importo llamada a endpoint
import { guardarContacto } from "../../controller/miApp.controller";

const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    width: "98%",
  },
}));

const useStylesCards = makeStyles({
  root: {
    width: "98%",
    margin: "0 10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    width: "98%",
    margin: "0 10px",
    color: theme.palette.text.secondary,
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
  const clase1 = useStylesCards();
  const clase3 = useStylesText();
  const clase4 = useStylesButton();
  const [encuestas, setEncuestas] = useState([]);
  const clase5 = useStylesGrid();
  const classes = useStyles();
  const [region, setRegion] = React.useState("");

  const history = useHistory();
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [opinion, setOpinion] = React.useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleOpinion = (event) => {
    setOpinion(event.target.value);
  };
  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0;
    }
    return true;
  };

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const subirDatos = async function () {
    let archivoDatos = false;

    const validateValidEmail = (stringToValidate) => {
      if (typeof stringToValidate !== undefined) {
        let lastAtPos = stringToValidate.lastIndexOf("@");
        let lastDotPos = stringToValidate.lastIndexOf(".");
        if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            stringToValidate.indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            stringToValidate.length - lastDotPos > 2
          )
        ) {
          return stringToValidate.length === 0;
        }
      }
      return true;
    };

    if (
      !isEmpty(nombre) &&
      !isEmpty(region) &&
      validateValidEmail(email) &&
      !isEmpty(opinion)
    ) {
      archivoDatos = await guardarContacto(nombre, email, region, opinion);
    } else {
      alert("Verificar que los datos esten completados correctamente");
    }

    return archivoDatos;
  };

  const redirect = async () => {
    const ok = await subirDatos();
    if (ok) {
      history.push("/Operador");
    }
  };

  return (
    <Page pageTitle={"Funcionalidad en construccion"}>
      <Scrollbar
        style={{ height: "93.4%", width: "100%", display: "flex", flex: 1 }}
      >
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={clase5.paper}>
              <h2>Drogas compradas en los ultimos 6 meses</h2>
            </Paper>
          </Grid>
        </Grid>
        <br />
        <PieChart
          viewBoxSize ={[170,170]} 
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
        />
         
      </Scrollbar>
      <Footer />
    </Page>
  );
}
