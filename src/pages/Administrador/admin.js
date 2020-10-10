import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import EnhancedTable from './tabla_admin'

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
  const handleChange = (event) => {
    
  };

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
    setInputList([...inputList, { Usuario: "", Nombre: "" , Apellido: "", Email: "", DNI: ""}]);
  };

  return (
    <Page pageTitle={'Administrador de usuarios'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <br/>
        <EnhancedTable/>
      {inputList.map((x, i) => {
        return (
          <Card>
          <form className={classes.root} noValidate autoComplete="off">
          <div className="box" width="auto">
            <TextField id="outlined-basic"  variant="outlined" 
              input
              name="Usuario"
              placeholder="Usuario"
              value={x.Usuario}
              onChange={e => handleInputChange(e, i)}
            />
            <TextField id="outlined-basic"  variant="outlined" 
              input
              name="Nombre"
              placeholder="Nombre"
              value={x.Nombre}
              onChange={e => handleInputChange(e, i)}
            /> 
            <TextField id="outlined-basic"  variant="outlined" 
              input
              name="Apellido"
              placeholder="Apellido"
              value={x.Apellido}
              onChange={e => handleInputChange(e, i)}
            /> 
            <TextField id="outlined-basic"  variant="outlined" 
              input
              className="ml10"
              name="Email"
              placeholder="e-Mail"
              value={x.Email}
              onChange={e => handleInputChange(e, i)}
            />
            <TextField id="outlined-basic"  variant="outlined" 
              input
              className="ml10"
              name="DNI"
              placeholder="DNI"
              value={x.DNI}
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