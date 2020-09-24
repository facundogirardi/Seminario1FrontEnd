import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function ABMUnaOpcion(){

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
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
      setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

  return (
      <div>
      {inputList.map((x, i) => {
        return (
            <FormControl component="fieldset">
              <TextField id="outlined-basic" label="Pregunta a realizar:" variant="outlined" 
              input
              name="firstName"
              placeholder="Pregunta a realizar:"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
                <div className="box" width="auto">
                    <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
                        <FormControlLabel value="10" control={<Radio />} label="Opcion 1" />
                        <FormControlLabel value="90" control={<Radio />} label="Opcion 2" />
                        <FormControlLabel value="99" control={<Radio />} label="Opcion 3" />
                        <FormControlLabel value="87" control={<Radio />} label="Opcion 4" />
                        <FormControlLabel value="30" control={<Radio />} label="Opcion 5" />
                    </RadioGroup>
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
                className={AddIcon} onClick={handleAddClick}>Agregar</Button></IconButton>}
            </div>
          </div>
          </FormControl>
        );
      })}
      </div>
  );
}

export default ABMUnaOpcion;