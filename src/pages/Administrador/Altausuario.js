import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function ABMTexto(){

  const classes = useStyles();

  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
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
          <div className="box" width="auto">
            <TextField id="outlined-basic" label="Nombre" variant="outlined" 
              input
              name="Nombre"
              placeholder="Nombre"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <TextField id="outlined-basic" label="Apellido" variant="outlined" 
              input
              className="ml10"
              name="Apellido"
              placeholder="Apellido"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
             <TextField id="outlined-basic" label="e-Mail" variant="outlined" 
              input
              className="ml10"
              name="e-Mail"
              placeholder="e-Mail"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
             <TextField id="outlined-basic" label="DNI" variant="outlined" 
              input
              className="ml10"
              name="DNI"
              placeholder="DNI"
              value={x.lastName}
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
          </form>
        );
      })}
      </div>
  );
}

export default ABMTexto;