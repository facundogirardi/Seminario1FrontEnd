import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function ABMCheckbox() {

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [value, setValue] = React.useState(' ');
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setValue(event.target.value);
  };
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
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

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <form className={classes.root} noValidate autoComplete="off">
            <FormControl component="fieldset" className={classes.formControl}>
              <TextField id="outlined-basic" label="Titulo Pregunta" variant="outlined"
                input
                name="firstName"
                placeholder="Titulo Pregunta"
                value={x.firstName}
                onChange={e => handleInputChange(e, i)}
              />
              <div className="box" width="auto">
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <input type="text" id="Name" name="Name" /> <br />
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <input type="text" id="Name" name="Name" /> <br />
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <input type="text" id="Name" name="Name" /> <br />
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <input type="text" id="Name" name="Name" /> <br />
                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <input type="text" id="Name" name="Name" /> <br />
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
                      className={AddIcon} onClick={handleAddClick}>Agregar</Button></IconButton>}
                </div>
              </div>
              <br />
            </FormControl>
          </form>
        );
      })}
      <div>
        <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
          <Button onClick={handleClick}
            variant="contained"
            color="primary"
            className={AddIcon}
          >Haga click para confirmar la encuesta
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
              <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
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
        <Link to='/ABM'>
          <IconButton width="auto" edge="end" className={AddIcon} color="inherit" aria-label="menu">
            <Button variant="contained"
              color="primary"
              className={AddIcon} >
              Volver
          </Button>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default ABMCheckbox;