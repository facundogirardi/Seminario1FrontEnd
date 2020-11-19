import React, { useEffect, useState } from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import EditableTable from "./EditableTable"
import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import "./ABM.css"

//importo 
import { getEncuesta } from "../../controller/miApp.controller";
import { deleteEncuesta } from "../../controller/miApp.controller";
import { updateEncuesta } from "../../controller/miApp.controller";

export default function AbmEncuestas() {
  const [encuestas, setEncuestas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTEncuesta()
  }, []);

  const getTEncuesta = async () => {
    const encuestas = await getEncuesta()
    setEncuestas(encuestas)
    setLoading(false)
  };

  const editarEncuesta = async function (newEncuesta) {
    let Encuesta = false;
    Encuesta = await updateEncuesta(newEncuesta._id, newEncuesta.titulo, newEncuesta.sector, newEncuesta.tamaño);
    //window.location.reload(true);
  }

  const borrarEncuesta = async function (newEncuesta) {
    let Encuesta = false;

    Encuesta = await deleteEncuesta(newEncuesta._id, newEncuesta.titulo, newEncuesta.sector, newEncuesta.tamaño);
    console.log(newEncuesta._id)
  }

  const deleteEncuestas = (encuesta, resolve) => {
    const newEncuesta = { _id: encuesta._id };
    borrarEncuesta(newEncuesta)
    console.log("Aca elimino la encuesta.", encuesta)
    resolve()
  };

  const editEncuesta = (oldEncuesta, encuesta, resolve) => {
    const newEncuesta = { _id: encuesta._id, titulo: encuesta.titulo, sector: encuesta.sector, tamaño: encuesta.tamaño };
    editarEncuesta(newEncuesta)
    console.log("aca edito la encuesta", encuesta)
    resolve();
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
        <Link to="/NuevaEncuesta">
        <Button variant="contained" color="secondary" fullWidth="true">Generar Nueva Encuesta</Button>
        </Link>
        <div style={{ padding: 24, width: "100%" }}>
          <EditableTable title={"Encuestas"} data={encuestas} columns={columns} setData={setEncuestas}
            onRowDelete={deleteEncuestas}
            onRowUpdate={editEncuesta}
            deleteText={"¿Está seguro de eliminar la encuesta?"} isLoading={loading} />
        </div>
      </Scrollbar>
      <Footer />
    </Page>
  )
}