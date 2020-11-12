import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from "react-router";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function BasicTable({usuarios}) {
  const classes = useStyles();
  const history = useHistory();

  const goToUsuariosEdit = (row) => {
    history.push({
      pathname: "/usuarioEdit",
      hydrantTrucks: hydrantTrucks
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">DNI</TableCell>
            <TableCell align="right">Root</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.dni}</TableCell>
              <TableCell align="right">{row.root === "S" ? <CheckIcon/> : <FingerprintIcon/>}</TableCell>
              <TableCell align="right"><Tooltip title="Editar Usuario">
                        <EditIcon onClick={() => goToUsuariosEdit(row)} />
                    </Tooltip></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}