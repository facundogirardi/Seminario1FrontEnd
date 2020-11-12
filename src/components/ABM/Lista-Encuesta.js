import React, { useState } from "react";
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

function ABMRadio() {

  const classes = useStyles();
  const [value, setValue] = React.useState(' ');
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <EnhancedTable />
        );
      })}
    </div>
  );
}

export default ABMRadio;