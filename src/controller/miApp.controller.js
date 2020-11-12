import urlWebServices from '../controller/webServices.js';

export const login = async function (login) {
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,

        });

        let rdo = response.status;
        console.log("response", response);
        let data = await response.json();
        console.log("jsonresponse", data);
        switch (rdo) {
            case 201:
                {
                    //guardo token
                    localStorage.setItem("x", data.loginUser.token);
                    //guardo usuario logueado
                    let user = data.loginUser.user;
                    localStorage.setItem("nombre", user.name);
                    localStorage.setItem("email", user.email);
                    console.log("es usurio", user.root);

                    if (user.root === "S") {
                        return ({ rdo: 2, mensaje: "Ok" });//Es root
                    }
                    else {
                        return ({ rdo: 0, mensaje: "Ok" });//correcto
                    }


                }
            case 202:
                {
                    //error mail
                    return ({ rdo: 1, mensaje: "El mail ingresado no existe en nuestra base." });
                }
            case 203:
                {
                    //error password
                    return ({ rdo: 1, mensaje: "La contraseña no es correcta." });
                }
            default:
                {
                    //otro error
                    return ({ rdo: 1, mensaje: "Ha ocurrido un error" });
                }
        }
    }
    catch (error) {
        console.log("error", error);
    };
}

export const guardarImgUser = async function (message) {
    //url webservices
    let url = urlWebServices.guardarImgUser;
    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen', message.imagen);

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        if (response.status === 201) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log("error", error);
        return false;
    };
}

export const uploadFileImg = async function (files, nombres) {
    //url webservices
    let url = urlWebServices.uploadFileImg;

    console.log('files', files)
    console.log('nombres', nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i], nombres[i])
    }

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body: formData
        });

        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}
export const getImagenesByUser = async function () {
    //url webservices
    let url = urlWebServices.getImgUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('email', localStorage.getItem('email'));

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        if (response.status === 200) {
            let data = await response.json();
            console.log("imagenesUser", data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else {
            let vacio = [];
            console.log("No hay imagenes")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

//Contacto

export const guardarContacto = async function (razonsocial, email, region, tamaño) {
    //url webservices
    let url = urlWebServices.contacto;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('razonsocial', razonsocial);
    formData.append('email', email);
    formData.append('region', region);
    formData.append('tamaño', tamaño);
    console.log("formData", formData)

    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });
        if (response.status === 201) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log("error", error);
        return false;
    };
}

export const guardarUsuario = async function (name, lastname, email, dni, password) {
    //url webservices
    let url = urlWebServices.guardarUsuario;
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('dni', dni);
    formData.append('password', password);


    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.status === 201) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log("error", error);
        return false;
    };
}

export const getUsuario = async function () {
    //url webservices
    let url = urlWebServices.getUsuario;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);

    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });
        if (response.status === 200) {
            let data = await response.json();

            let listaUsuarios = data.data.docs;
            console.log("Lista de Usuarios", listaUsuarios);
            return listaUsuarios;
        }
        else {
            let vacio = [];
            console.log("No hay usuarios")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

export const deleteUsuario = async function (id) {
    //url webservices
    let url = urlWebServices.deleteUsuario;
    const formData = new URLSearchParams();
    console.log("el id", id)
    formData.append('_id', id);
    console.log("el formData", formData)

    try {
        let response = await fetch(url, {
            method: 'DELETE', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.status === 201) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log("error", error);
        return false;
    };
}

export const updateUsuario = async function (dni, name, lastname, email, password) {
    //url webservices
    let url = urlWebServices.updateUsuario;
    const formData = new URLSearchParams();
    console.log(dni);
    console.log(name);
    console.log(lastname);
    console.log(email);
    console.log(password);

    formData.append('dni', dni);
    formData.append('name', name);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);


    try {
        let response = await fetch(url, {
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                //'x-access-token': localStorage.getItem('x'),
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        if (response.status === 200) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log("error", error);
        return false;
    };
}