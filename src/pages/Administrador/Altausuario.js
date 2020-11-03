import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function ABMTexto(){

  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" ,Name: "", Name2: ""}]);
 
  const [value, setValue] = React.useState(' ');

  const handleChange = (event) => {
    setValue(event.target.value);
};

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
      <div>
      {inputList.map((x, i) => {
        return (
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl component="fieldset" className={classes.formControl}>
          <div className="box" width="auto">
            <TextField id="outlined-basic" label="Nombre" variant="outlined" 
              input
              name="firstName"
              placeholder="Nombre"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <TextField id="outlined-basic" label="Apellido" variant="outlined" 
              input
              name="lastName"
              placeholder="Apellido"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
             <TextField id="outlined-basic" label="e-Mail" variant="outlined" 
              input
              name="Name"
              placeholder="e-Mail"
              value={x.Name}
              onChange={e => handleInputChange(e, i)}
            />
             <TextField id="outlined-basic" label="DNI" variant="outlined" 
              input
              name="Name2"
              placeholder="DNI"
              value={x.Name2}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && 
              <IconButton  width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
                <Button 
                variant="contained"
                color="primary"
                className={AddIcon}
                onClick={() => handleRemoveClick(i)}>Eliminar</Button></IconButton>}
              {inputList.length - 1 === i && <IconButton width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
                <Button 
                variant="contained"
                color="primary"
                className={AddIcon} onClick={handleAddClick}>Agregar otro usuario</Button></IconButton>}
            </div>
          </div>
          </FormControl>
          <div>
          <IconButton  width="200px"  className={AddIcon} color="inherit"  aria-label="menu">
          <Button onClick={handleClick}
           variant="contained"
           color="primary"
           className={AddIcon}
           >Haga click para confirmar el usuario
          </Button>
          </IconButton>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Encuesta confirmada y archivada"
            action={
              <React.Fragment>
                 <IconButton  width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
                <Button color="secondary" size="small" onClick={handleClose}>
                  CERRAR
                </Button>
                </IconButton>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            
            }
          />
          
        </div>
          </form>
        );
      })}
      
      </div>
  );
}

export default ABMTexto;