import React from 'react';
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className="main-footer">
      <div id="izquierda">
        <br />
        <div id="derecha">
        </div>
      </div>
    </div>
  );
}

export default Footer;