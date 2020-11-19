import React, { useEffect, useState } from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import EditableTable from "./EditableTable"
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import Doc from './DocService';
import PdfContainer from './PdfContainer';
import "./Resultado.css";
import { energyConsumption as data } from '../Resultados/DatosTabla';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import {
  Chart,
  Title,
  Legend,
  ArgumentAxis,
  BarSeries,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

//importo 
import { getUsuario } from "../../controller/miApp.controller";

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

export default function AbmUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    const usuarios = await getUsuario()
    setUsuarios(usuarios)
    setLoading(false)
    console.log("usuarios", usuarios)
  };

  var myJSON = JSON.stringify(usuarios);
  var myObject = JSON.parse(myJSON);
  console.log("json",myObject)

  return (
    <Page pageTitle={'Api Benchmarck'}>
      <Scrollbar
        style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>

        <Link to="/Encuesta">
          <button class="block">Realizar otra encuesta</button>
        </Link>
        <br></br>

        <span>
          <h3>El resultado de su encuesta es :</h3>

          hola

        </span>



      </Scrollbar>
      <Footer />
    </Page >
  )
}
