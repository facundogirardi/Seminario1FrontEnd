import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import EnhancedTable from './tabla-encuesta'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 'auto',
    },
  },
}));

function ABMRadio(){

    const classes = useStyles();

    const [value, setValue] = React.useState(' ');

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
          <EnhancedTable/>
        );
      })}
      </div>
  );
}

export default ABMRadio;