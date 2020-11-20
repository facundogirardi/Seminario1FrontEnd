import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import "./Encuesta.css";
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import banner from '../../imagenes/banner3.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

//importo 
import { getEncuestaID } from "../../controller/miApp.controller";

var url = window.location.href;
var tituloID = url.substring(url.lastIndexOf('/') + 1);
var titulo = tituloID.replace(/%20/g, " ");

const useStylesGrid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: "100%",
        color: theme.palette.text.secondary,
    },
}));

const useStylesButton = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2),
      width: "98%",
    },
  }));

export default function Forms() {

    const clase5 = useStylesGrid();
    const clase4 = useStylesButton();
    const [encuestas, setEncuestas] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    const [cambiar, setCambiar] = React.useState('');

    const handleCambiar = (event) => {
        setCambiar(event.target.value);
    }

    useEffect(() => {
        getEncuesta()
    }, []);

    const getEncuesta = async () => {
        const encuestas = await getEncuestaID(titulo)
        setEncuestas(encuestas)
        setLoading(false)
    };

    const redirect = async () => {
        //const ok = await encuestaCompletada()
        const ok = true
        if (ok) {
          history.push("/Contacto")
        }
      }

    console.log("Encuesta titulo por ID : ", titulo)
    console.log("Encuesta recuperada por ID : ", encuestas)

    return (
        <Page pageTitle={'Cuestionario Api Benchmark'}>
            <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
                <img src={banner} width="100%" height="25%" alt="Logo" />
                <br />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={clase5.paper}><h2>{titulo}</h2></Paper>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={clase5.paper}><h2>Como estuvo el porcentaje de ventas en los ultimos 6 meses?</h2></Paper>
                    </Grid>
                </Grid>
                <br/>
                <RadioGroup aria-label="gender" name="gender1" value={cambiar} onChange={handleCambiar}>
                    <center>
                    <FormControlLabel value="female" control={<Radio />} label="Crecio un 25%." />
                    <FormControlLabel value="male" control={<Radio />} label="Decrecio un 30%." />
                    <FormControlLabel value="other" control={<Radio />} label="Se mantuvo igual al 2019." />
                    </center>
                </RadioGroup>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={clase5.paper}><h2>Debido a la pandemia, cuantos empleados se encuentran en home office?</h2></Paper>
                    </Grid>
                </Grid>
                <br/>
                <RadioGroup aria-label="gender" name="gender1" value={cambiar} onChange={handleCambiar}>
                    <center>
                    <FormControlLabel value="female" control={<Radio />} label="10%" />
                    <FormControlLabel value="male" control={<Radio />} label="20%" />
                    <FormControlLabel value="other" control={<Radio />} label="100%" />
                    </center>
                </RadioGroup>
                <br/>
                <Button
                    variant="contained"
                    color="Primary"
                    className={clase4.button}
                    startIcon={<NavigateNextIcon />}
                    onClick={() => { redirect() }}
                >
                    Siguiente
      </Button>
            </Scrollbar>
            <Footer />
        </Page>
    );
}