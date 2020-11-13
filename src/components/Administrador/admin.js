import React, { useEffect, useState } from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
//import BasicTable from './tabla_admin'
//import Altausuario from './Altausuario'
import EditableTable from "./EditableTable"
import Swal from "sweetalert2";

//importo 
import { getUsuario } from "../../controller/miApp.controller";
import { guardarUsuario } from "../../controller/miApp.controller";
import { deleteUsuario } from "../../controller/miApp.controller";
import { updateUsuario } from "../../controller/miApp.controller";

export default function AbmUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);


  const isEmpty = (stringToValidate) => {
    if (stringToValidate !== undefined && stringToValidate !== null) {
      return stringToValidate.length === 0
    }

    return true;
  };

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async () => {
    const usuarios = await getUsuario()
    setUsuarios(usuarios)
    setLoading(false)
  };
  
  const subirUsuario = async function (newUsuario) {
    let Usuario = false;
    if (!isEmpty(newUsuario.name) && !isEmpty(newUsuario.email) && !isEmpty(newUsuario.lastname) && !isEmpty(newUsuario.dni) && !isEmpty(newUsuario.password)) {
      Usuario = await guardarUsuario(newUsuario.name, newUsuario.lastname, newUsuario.email, newUsuario.dni, newUsuario.password);
    }
    else {
      alert("Completar todos los datos.")
    }
  }

  const editarUsuario = async function (newUsuario) {
    let Usuario = false;
      Usuario = await updateUsuario(newUsuario.dni, newUsuario.name, newUsuario.lastname, newUsuario.email, newUsuario.password);
  }

  const borrarUsuario = async function (newUsuario) {
    let Usuario = false;

    Usuario = await deleteUsuario(newUsuario._id);
    console.log(newUsuario._id)
  }

  const showMessageAlert = (messages, isSuccess, isDelete) => {
    let message = "";
    messages.forEach(msg => {
      message = message + msg + "\n";
    });
    const icon = isSuccess ? "success" : "error";
    const title = isSuccess ? isDelete ? "Borrado correctamente" : "Registro Finalizado" : "Hubo un error";
    return Swal.fire({
      title: title,
      text: `${message}`,
      icon: icon,
      confirmButtonText: "Aceptar",
    });
  };

  const deleteUsuarios = (usuario, resolve) => {
    const newUsuario = { _id: usuario._id, name: usuario.name, lastname: usuario.lastname, email: usuario.email, dni: usuario.dni, password: usuario.password };
    borrarUsuario(newUsuario)
    console.log("Aca elimino el usuario.", usuario)
    resolve()
  };

  const addUsuario = (usuario, resolve) => {
    const newUsuario = { dni: usuario.dni, name: usuario.name, lastname: usuario.lastname, email: usuario.email, password: usuario.password };
    subirUsuario(newUsuario)
    resolve()
    console.log("aca creo el usuario", usuario)
  };

  const editUsuario = (oldUsuario, usuario, resolve) => {
    const newUsuario = { dni: usuario.dni, name: usuario.name, lastname: usuario.lastname, email: usuario.email, password: usuario.password };
    editarUsuario(newUsuario)
    console.log("aca edito el usuario", usuario)
    resolve();
  };

  const handleError = (error, defaultMessage) => {
    let errorMessage = [defaultMessage];
    if (error.response.data.message) {
      if (Array.isArray(error.response.data.message)) {
        errorMessage = [];
        error.response.data.message.forEach(msg => {
          errorMessage.push(msg.msg)
        })
      } else {
        errorMessage = [error.response.data.message];
      }
    }
    showMessageAlert(errorMessage, false);
  };

  const columns = [
    { title: 'DNI', field: 'dni'},
    { title: 'Nombre', field: 'name' },
    { title: 'Apellido', field: 'lastname' },
    { title: 'Email', field: 'email' },
    { title: 'Contraseña', field: 'password' },
    { title: 'Root', field: 'root',editable: 'never' }
  ];

  return (
    <div style={{ padding: 24, width:"100%"}}>
      <EditableTable title={"Usuarios"} data={usuarios} columns={columns} setData={setUsuarios}
        onRowDelete={deleteUsuarios}
        onRowAdd={addUsuario} onRowUpdate={editUsuario}
        deleteText={"¿Está seguro de eliminar el usuario?"} isLoading={loading} />
    </div>
  )
}