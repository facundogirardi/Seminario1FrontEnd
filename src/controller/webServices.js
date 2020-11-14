const urlApi = "http://localhost:4000/";
//const urlApi = "http://api-benchmark.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
    contacto: urlApi + "api/users/contacto",
    guardarUsuario: urlApi + "api/users/registration",
    getUsuario: urlApi + "api/users/tusuarios",
    deleteUsuario: urlApi + "api/users/usr",
    updateUsuario: urlApi + "api/users/actualizacion",
    getEncuesta: urlApi + "api/users/tencuesta"
}

export default urlWebServices;