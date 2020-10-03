import React from 'react';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'




const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
  
];
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  export default function MultipleSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      setPersonName(event.target.value);
    };
  
    const handleChangeMultiple = (event) => {
      const { options } = event.target;
      const value = [];
      for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      setPersonName(value);
    };
  
    return (
      <div>
          
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Seleccionar usuarios:</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">Usuarios seleccionados:</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
                
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
            
              </MenuItem>
              
            ))}

      
          </Select> 
          <div>

          <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                
                    </div>
            <div>     
            <IconButton edge="end" aria-label="edit">
                <EditIcon/>
                </IconButton>
                </div>  
                <div>
                <IconButton edge="end" aria-label="add">
                <AddIcon/>
                </IconButton>
                </div>  
        </FormControl>

        
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="select-multiple-native">
            Usuarios confimados
          </InputLabel>
          <Select
            multiple
            native
            value={personName}
            onChange={handleChangeMultiple}
            inputProps={{
              id: 'select-multiple-native',
            }}
          >
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <Link to="/ABM">
        <Button variant="contained">Usuarios autorizados</Button>
      </Link>
      </div>
      
    );
  }


  