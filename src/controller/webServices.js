//const urlApi = "http://localhost:4000/";
const urlApi = "https://seminario1-backend.herokuapp.com/";
console.log("url", urlApi);

const urlWebServices = {

    //Login (Super usuario y administrador de encuestas)
    login: urlApi + "api/users/login",

    //Informacion de contacto
    contacto: urlApi + "api/users/contacto",

    //ABM Usuarios
    guardarUsuario: urlApi + "api/users/registration",
    getUsuario: urlApi + "api/users/tusuarios",
    getUsuarioID: urlApi + "api/users/usuarioid",
    deleteUsuario: urlApi + "api/users/usr",
    updateUsuario: urlApi + "api/users/actualizacion",

    //Reporte
    getReporte: urlApi + "api/users/treporte",
    guardarReporte: urlApi + "api/users/reporte",
    getReporteID: urlApi + "api/users/reporteid",

}

export default urlWebServices;