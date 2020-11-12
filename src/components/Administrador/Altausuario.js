import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

//importo 
import { guardarUsuario } from "../../controller/miApp.controller";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function ABMTexto() {

  const classes = useStyles();
  const [name, setNombre] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [lastname, setApellido] = React.useState("");
  const [dni, setDni] = React.useState("");
  const [password, setContraseña] = React.useState("");

  const handleContraseña = (event) => {
    setContraseña(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleNombre = (event) => {
    setNombre(event.target.value);
  }
  const handleApellido = (event) => {
    setApellido(event.target.value);
  }
  const handleDni = (event) => {
    setDni(event.target.value);
  }
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }

    return true;
  };

  const subirUsuario = async function () {
    let archivoUsuario = false;
    
    if (!isEmpty(name) && !isEmpty(email) && !isEmpty(lastname) && !isEmpty(dni) && !isEmpty(password)) {

      archivoUsuario = await guardarUsuario(name,lastname,email,password,dni);
    }
    else{
      alert("Completar todos los datos.")
    }
    return archivoUsuario
  }

  const redirect = async () => {
    const ok = await subirUsuario()
    if (ok) {
      alert("Usuario Subido a la Base de datos.")
      console.log("Usuario subido a la base de datos.")
    }
  }

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "", Name: "", Name2: "" }]);

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl component="fieldset" className={classes.formControl}>
              <div className="box" width="auto">
                <TextField
                  id="nombre"
                  label="Nombre"
                  variant="outlined"
                  inputProps={{
                    onChange: (event) => handleNombre(event),
                  }}
                />
                <TextField
                  id="apellido"
                  label="Apellido"
                  variant="outlined"
                  inputProps={{
                    onChange: (event) => handleApellido(event),
                  }}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  inputProps={{
                    onChange: (event) => handleEmail(event),
                  }}
                />
                <TextField
                  id="dni"
                  label="Dni"
                  variant="outlined"
                  inputProps={{
                    onChange: (event) => handleDni(event),
                  }}
                />
                <TextField
                  id="contraseña"
                  label="Contraseña"
                  variant="outlined"
                  inputProps={{
                    onChange: (event) => handleContraseña(event),
                  }}
                />
                <div className="btn-box">
                  {inputList.length !== 1 &&
                    <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
                      <Button
                        variant="contained"
                        color="primary"
                        className={AddIcon}
                        onClick={() => handleRemoveClick(i)}>Eliminar</Button></IconButton>}
                  {inputList.length - 1 === i && <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
                    <Button
                      variant="contained"
                      color="primary"
                      className={AddIcon} onClick={handleAddClick}>Agregar otro usuario</Button></IconButton>}
                </div>
              </div>
              <div>
                <IconButton width="200px" className={AddIcon} color="inherit" aria-label="menu">
                  <Button
                    variant="contained"
                    color="primary"
                    className={AddIcon}
                    onClick={() => { redirect() }}>
                    Subir Usuario
                </Button>
                </IconButton>
              </div>
            </FormControl>
          </form>
        );
      })}
    </div>
  );
}

export default ABMTexto;