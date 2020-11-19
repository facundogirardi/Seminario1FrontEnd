import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Box } from "@material-ui/core";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import "./ABM.css"
import { useHistory } from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

//importo 
import { guardarEncuesta } from "../../controller/miApp.controller";

const useStylesFormControl = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

export default function NuevaEncuesta() {

    const history = useHistory();
    const classes2 = useStylesFormControl();
    const [tituloEncuesta, setTituloEncuesta] = React.useState('');
    const [sector, setSector] = React.useState('');
    const [tamaño, setTamaño] = React.useState("");

    const [respuesta, setRespuestaPregunta] = React.useState([]);
    const [tituloPregunta, setTituloPregunta] = React.useState([]);

    const handleTituloEncuesta = (event) => {
        setTituloEncuesta(event.target.value);
    }
    const handleSector = (event) => {
        setSector(event.target.value);
    }
    const handleTamaño = (event) => {
        setTamaño(event.target.value);
    }
    const handleRespuestaPregunta = (event) => {
        setRespuestaPregunta(event.target.value);
    }
    const handleTituloPregunta = (event) => {
        setTituloPregunta(event.target.value);
    }

    const isEmpty = (stringToValidate) => {
        if (stringToValidate !== undefined && stringToValidate !== null) {
            return stringToValidate.length === 0
        }

        return true;
    };

    const subirEncuesta = async function () {
        let archivoEncuesta = false;

        if (!isEmpty(tituloEncuesta) && !isEmpty(sector) && !isEmpty(tamaño) && !isEmpty(respuesta) && !isEmpty(tituloPregunta)) {

            archivoEncuesta = await guardarEncuesta(tituloEncuesta, sector, tamaño, tituloPregunta, respuesta);
        }
        else {
            alert("Completar todos los datos.")
        }
        return archivoEncuesta
    }

    const redirect = async () => {
        const ok = await subirEncuesta()
        if (ok) {
            alert("Encuesta subida a la Base de datos.")
            history.push("/ABM")
            console.log("Encuesta subida a la base de datos.")
        }
    }

    const [inputListPreguntas, setInputListPreguntas] = useState([{ firstName: "", lastName: "" }]);

    const handleRemoveClickPreguntas = index => {
        const list = [...inputListPreguntas];
        list.splice(index, 1);
        setInputListPreguntas(list);
    };

    const handleAddClickPreguntas = () => {
        setInputListPreguntas([...inputListPreguntas, { firstName: "", lastName: "" }]);
    };

    const [inputListRespuestas, setInputListRespuestas] = useState([{ firstName: "", lastName: "" }]);

    const handleRemoveClickRespuesas = index => {
        const list = [...inputListPreguntas];
        list.splice(index, 1);
        setInputListRespuestas(list);
    };

    const handleAddClickRespuestas = () => {
        setInputListRespuestas([...inputListPreguntas, { firstName: "", lastName: "" }]);
    };

    return (
        <Page pageTitle={'Creacion de una nueva encuesta'}>
            <Scrollbar
                style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
                <div className="Cuadrado">
                    <div>
                        <FormControl variant="outlined" component="fieldset" className={classes2.formControl}>
                            <div className="box" width="auto">
                                <TextField
                                    id="titulo"
                                    label="Titulo Encuesta"
                                    variant="outlined"
                                    inputProps={{
                                        onChange: (event) => handleTituloEncuesta(event),
                                    }}
                                />
                                <FormControl variant="outlined" className={classes2.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Sector</InputLabel>
                                    <Select
                                        value={sector}
                                        onChange={handleSector}
                                        label="Sector"
                                    >
                                        <MenuItem value="">
                                            <em>Ninguno seleccionado</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Elaboraciòn de productos alimenticios y/o bebidas</MenuItem>
                                        <MenuItem value={20}>Fabricación de productos textiles</MenuItem>
                                        <MenuItem value={30}>Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles</MenuItem>
                                        <MenuItem value={40}>Fabricación de papel y productos de papel</MenuItem>
                                        <MenuItem value={50}>Fabricación de sustancias y productos químicos</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="outlined" className={classes2.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Tamaño</InputLabel>
                                    <Select
                                        id="tamaño"
                                        value={tamaño}
                                        onChange={handleTamaño}
                                    >
                                        <MenuItem value="">
                                            <em>Ninguno seleccionado</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Pequeña</MenuItem>
                                        <MenuItem value={20}>Mediana</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </FormControl>
                        <br />
                        {inputListPreguntas.map((x, i) => {
                            return (
                                <form component="fieldset" className={classes2.formControl}>
                                    <FormControl component="fieldset">
                                        <TextField
                                            id="tituloPregunta"
                                            label="Titulo Pregunta"
                                            variant="outlined"
                                            inputProps={{
                                                onChange: (event) => handleTituloPregunta(event),
                                            }}
                                        />
                                        <Box display="flex" justifyContent="center" m={1} p={1}>
                                            <div className="box" width="98%">
                                                    <div className="box" width="98%">
                                                        <TextField
                                                            id="Respuesta"
                                                            label="Respuesta"
                                                            variant="outlined"
                                                            inputProps={{
                                                                onChange: (event) => handleTituloPregunta(event),
                                                            }}
                                                        />
                                                        {inputListRespuestas.length - 1 === i && <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            className={AddIcon} onClick={handleAddClickRespuestas}>Agregar Respuesta</Button></IconButton>}
                                                    </div>
                                                <div className="btn-box">
                                                    {inputListPreguntas.length !== 1 &&
                                                        <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                className={AddIcon}
                                                                onClick={() => handleRemoveClickPreguntas(i)}>Eliminar Pregunta</Button></IconButton>}
                                                    {inputListPreguntas.length - 1 === i && <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            className={AddIcon} onClick={handleAddClickPreguntas}>Agregar Pregunta</Button></IconButton>}
                                                    <br />
                                                </div>
                                            </div>
                                        </Box>
                                    </FormControl>
                                </form>
                            );
                        })}
                        <div>
                            <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={AddIcon}
                                    onClick={() => { redirect() }}
                                >Subir Encuesta
                            </Button>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Scrollbar>
            <Footer />
        </Page>
    );
}