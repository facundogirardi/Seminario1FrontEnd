import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import Page from "material-ui-shell/lib/containers/Page/Page";
import "./Envio.css";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import banner from "../../imagenes/banner1.jpg";
import PhoneInput from "react-phone-input-2";
import MessageBox from "./MessageBox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "react-phone-input-2/lib/bootstrap.css";
import urlencode from "urlencode";
import Button from "@material-ui/core/Button";

//importo
import { getUsuarioID } from "../../controller/miApp.controller";

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

  let link = `https://api.whatsapp.com/send?phone=${"+54" + usuarios.telefono}${
    "Estimado cliente, le informamos que su pedido : " +
      "*" +
      usuarios.pedido +
      "*" +
      " se encuentra : " +
      "*" +
      usuarios.estadopedido +
      "*" &&
    `&text=${urlencode(
      "Estimado cliente, le informamos que su pedido : " +
        "*" +
        usuarios.pedido +
        "*" +
        " se encuentra : " +
        "*" +
        usuarios.estadopedido +
        "*.   " +
        message
    )}`
  }`;

  let handleLinkClick = () => {
    if (validateMessage()) {
      window.open(link);
    }
  };

  useEffect(() => {
    getUsuario(props.match.params.id);
  }, [props.match.params.id]);

  const getUsuario = async (id) => {
    const usuarios = await getUsuarioID(id);
    setUsuarios(usuarios[0]);
  };

  let validatePhoneNumber = () => {
    // eslint-disable-next-line
    if (
      phoneNumber.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      )
    ) {
      return true;
    } else {
      setError("Numero telefonico invalido");
      return false;
    }
  };

  let validateMessage = () => {
    if (message.length < 50) {
      return true;
    } else {
      setError("El mensaje puede contener hasta 50 caracteres");
      return false;
    }
  };

  console.log("Telefono : ", "+54" + usuarios.telefono);
  console.log(
    "Estado del Pedido : ",
    "Estimado cliente, le informamos que su pedido : " +
      "*" +
      usuarios.pedido +
      "*" +
      " se encuentra : " +
      "*" +
      usuarios.estadopedido +
      "*"
  );
  return (
    <Page pageTitle={"Seleccion operador"}>
      <Scrollbar
        style={{ height: "93.4%", width: "100%", display: "flex", flex: 1 }}
      >
        <img src={banner} width="100%" height="25%" alt="Logo" />
        <br />
     
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={clase5.paper}>
                <h2>Envio de Status de pedido</h2>
              </Paper>
            </Grid>
          </Grid>
          <br />
          <div style={{ padding: 24, width: "100%", display: "block", flex: 1 }}>
          <p id="error">{error}</p>
          <label>
            <h6>El mensaje se enviará al siguiente número telefonico : </h6>
            <br />

            <condiciones> {usuarios.telefono} </condiciones>
          </label>
          <br />
          <br />

          <label>
            <h6>Mensaje a enviar </h6>
            <br />

            <condiciones>
              {" "}
              {"Estimado cliente, le informamos que su pedido : " +
                "*" +
                usuarios.pedido +
                "*" +
                " se encuentra : " +
                "*" +
                usuarios.estadopedido +
                "* " +
                message}{" "}
            </condiciones>
            <br />
            <br />
            <br />
            <MessageBox
              placeholder="Ingrese mensaje adicional"
              value={message}
              onChange={(message) => setMessage(message)}
            />
          </label>
          <br />

          <Button
            onClick={handleLinkClick}
            className="message-btn"
            variant="contained"
            color="Primary"
          >
            Enviar
          </Button>
          <div className="App"></div>
        </div>
      </Scrollbar>
      <Footer />
    </Page>
  );
}
