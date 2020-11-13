import React, { useEffect, useState } from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
//import BasicTable from './tabla_admin'
//import Altausuario from './Altausuario'
import EditableTable from "./EditableTable"
import Swal from "sweetalert2";
import { Button } from "@material-ui/core";

//importo 
import { getEncuesta } from "../../controller/miApp.controller";

export default function Abmncuestas() {
  const [encuestas, setEncuestas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTEncuesta()
  }, []);

  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }

    return true;
  };

  const getTEncuesta = async () => {
    const encuestas = await getEncuesta()
    setEncuestas(encuestas)
    setLoading(false)
  };

  const showMessageAlert = (messages, isSuccess, isDelete) => {
    let message = "";
    messages.forEach(msg => {
      message = message + msg + "\n";
    });
    const icon = isSuccess ? "success" : "error";
    const title = isSuccess ? isDelete ? "Borrado correctamente" : "Registro Finalizado" : "Hubo un error";
    return Swal.fire({
      title: title,
      text: `${message}`,
      icon: icon,
      confirmButtonText: "Aceptar",
    });
  };

  const deleteEncuestas = (encuesta, resolve) => {
    console.log("Aca elimino la encuesta.", encuesta)
    resolve()
  };

  const editEncuesta = (oldEncuesta, encuesta, resolve) => {
    console.log("aca edito la encuesta", encuesta)
    resolve();
  };

  const handleError = (error, defaultMessage) => {
    let errorMessage = [defaultMessage];
    if (error.response.data.message) {
      if (Array.isArray(error.response.data.message)) {
        errorMessage = [];
        error.response.data.message.forEach(msg => {
          errorMessage.push(msg.msg)
        })
      } else {
        errorMessage = [error.response.data.message];
      }
    }
    showMessageAlert(errorMessage, false);
  };

  const columns = [
    { title: 'Titulo', field: 'titulo' },
    { title: 'Sector', field: 'sector' },
    { title: 'Tamaño', field: 'tamaño' },
  ];

  return (
    <Page pageTitle={'Administrador de encuestas'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
        <br/>
        <Button variant="contained" color="secondary" fullWidth="true">Generar Nueva Encuesta</Button>
        <div style={{ padding: 24, width: "100%" }}>
          <EditableTable title={"Usuarios"} data={encuestas} columns={columns} setData={setEncuestas}
            onRowDelete={deleteEncuestas}
            onRowUpdate={editEncuesta}
            deleteText={"¿Está seguro de eliminar la encuesta?"} isLoading={loading} />
        </div>
      </Scrollbar>
      <Footer />
    </Page>
  )
}