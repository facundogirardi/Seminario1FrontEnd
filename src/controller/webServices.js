//const urlApi = "http://localhost:4000/";
const urlApi = "http://api-benchmark.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    uploadFileImg: urlApi + "utils/uploadImg",
    guardarImgUser: urlApi + "api/users/guardarImgUser",
    getImgUser: urlApi + "api/users/imgUserByMail",
    uploadFileImg: urlApi + "api/users/uploadImg",
    contacto: urlApi + "api/users/contacto",
    guardarUsuario: urlApi + "api/users/registration"
}

export default urlWebServices;