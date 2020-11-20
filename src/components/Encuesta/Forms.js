import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Encuesta.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from "react";
//importo 
import { getEncuestaID } from "../../controller/miApp.controller";

var url = window.location.href;
var tituloID = url.substring(url.lastIndexOf('/') + 1);
var titulo = tituloID.replace(/%20/g, " ");

export default function Forms() {
    const [encuestas, setEncuestas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEncuesta()
    }, []);

    const getEncuesta = async () => {
        const encuestas = await getEncuestaID(titulo)
        setEncuestas(encuestas)
        setLoading(false)
    };

    console.log("Encuesta titulo por ID : ", titulo)
    console.log("Encuesta recuperada por ID : ", encuestas)

    return (
        <Page pageTitle={'Cuestionario Api Benchmark'}>
            <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
                <h1>En construccion front</h1>
                <h1>API ya llega</h1>
            </Scrollbar>
            <Footer />
        </Page>
    );
}