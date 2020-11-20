const urlApi = "http://localhost:4000/";
//const urlApi = "https://api-benchmark-back.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {

    //Login (Super usuario y administrador de encuestas)
    login:urlApi +"api/users/login",

    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
    
    //Informacion de contacto
    contacto: urlApi + "api/users/contacto",

    //ABM Usuarios
    guardarUsuario: urlApi + "api/users/registration",
    getUsuario: urlApi + "api/users/tusuarios",
    deleteUsuario: urlApi + "api/users/usr",
    updateUsuario: urlApi + "api/users/actualizacion",
    
    //Encuestas
    getEncuesta: urlApi + "api/users/tencuesta",
    getEncuestaR: urlApi + "api/users/fencuesta",
    deleteEncuesta: urlApi + "api/users/bencuesta",
    updateEncuesta: urlApi + "api/users/aencuesta",
    guardarEncuesta: urlApi + "api/users/encuesta",


}

export default urlWebServices;