
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CardHeader } from '@material-ui/core';
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function CardText(){

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
    setInputList([...inputList, { firstName: "", lastName: "" , firstName2: "", lastName2: "", lastName3: "", lastName4: "", lastName5: "", lastName6: "", lastName7: ""}]);
  };

  return (
    <Page pageTitle={'Usted esta en la ventana de Super Usuario.'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <br/>
      {inputList.map((x, i) => {
        return (
          <Card>
          <form className={classes.root} noValidate autoComplete="off">
          <div className="box" width="auto">
            <TextField id="outlined-basic"  variant="outlined" 
              input
              name="firstName"
              placeholder="Nombre"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            /> 
              
            <TextField id="outlined-basic"  variant="outlined" 
              input
              name="firstName2"
              placeholder="Apellido"
              value={x.firstName2}
              onChange={e => handleInputChange(e, i)}
            /> 
            <br/>
            <TextField id="outlined-basic"  variant="outlined" 
              input
              className="ml10"
              name="lastName2"
              placeholder="e-Mail"
              value={x.lastName2}
              onChange={e => handleInputChange(e, i)}
            />
             <br/>

            <TextField id="outlined-basic"  variant="outlined" 
              input
              className="ml10"
              name="lastName3"
              placeholder="Compañia"
              value={x.lastName3}
              onChange={e => handleInputChange(e, i)}
              />
               <br/>
              
              <TextField id="outlined-basic"  variant="outlined" 
                input
                className="ml10"
                name="lastName4"
                placeholder="Ciudad"
                value={x.lastName4}
                onChange={e => handleInputChange(e, i)}
                />
                <TextField id="outlined-basic"  variant="outlined" 
                input
                className="ml10"
                name="lastName5"
                placeholder="Pais"
                value={x.lastName5}
                onChange={e => handleInputChange(e, i)}
                />
                <TextField id="outlined-basic"  variant="outlined" 
                input
                className="ml10"
                name="lastName6"
                placeholder="Direccion"
                value={x.lastName6}
                onChange={e => handleInputChange(e, i)}
                />
                <TextField id="outlined-basic"  variant="outlined" 
                input
                className="ml10"
                name="lastName7"
                placeholder="Codigo postal"
                value={x.lastName7}
                onChange={e => handleInputChange(e, i)}
                />
                <div className="btn-box">
              {inputList.length !== 1 && 
              <IconButton  width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
                <Button 
                variant="contained"
                color="primary"
                className={AddIcon}
                onClick={() => handleRemoveClick(i)}>Eliminar este usuario</Button></IconButton>}
              {inputList.length - 1 === i && <IconButton width="auto" edge="end" className={AddIcon} color="inherit"  aria-label="menu">
                <Button 
                variant="contained"
                color="primary"
                className={AddIcon} onClick={handleAddClick}>Agregar otro usuario</Button></IconButton>}
            </div>
            <IconButton>
            <Button>
              UPDATE USER
            </Button>
            </IconButton>
                

          
          
          </div>
          </form>
          </Card>
         
         
        );
      })}
      </Scrollbar>
      <Footer/>
    </Page>
  );
}

export default CardText;