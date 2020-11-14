import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import ABMTexto from "./ABM-Texto"
import ABMRadio from "./ABM-Radio";
import ABMCheckbox from "./ABM-Checkbox";
import ListaEncuesta from "./Lista-Encuesta";
import TextField from '@material-ui/core/TextField';
import DialogSelect from './ABM-Selector'
import "./ABM.css";
import EncuestasConfirmadas from './EncuestasConfirmadas';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function ABMTipo() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (

    <div className={classes.root}>
      <div className="Cuadrado">
      </div>
      <div className="Cuadrado"></div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Lista de Encuestas" {...a11yProps(0)} />
          <Tab label="Crear Encuestas" {...a11yProps(1)} />
          <Tab label="Encuestas confirmadas" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ListaEncuesta />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TextField
            id="outlined-basic"
            label="Titulo de encuesta"
            variant="outlined"
            input
            name="firstName"
          />
          <br />
          <br />
          <DialogSelect />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}