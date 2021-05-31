import urlWebServices from '../controller/webServices.js';

//Contacto
export const guardarContacto = async function (nombre, email, region, opinion) {
    let url = urlWebServices.contacto;

    const formData = new URLSearchParams();
    formData.append('nombre', nombre);
    formData.append('email', email);
    formData.append('region', region);
    formData.append('opinion', opinion);

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

// Recupero usuarios
export const getUsuario = async function () {
    let url = urlWebServices.getUsuario;

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

// Traer usuario por ID
export const getUsuarioID = async function (_id) {
    let url = urlWebServices.getUsuarioID;
    const formData = new URLSearchParams();

    formData.append('_id', _id);

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

            let listaUsuarioID = data.data.docs;
            return listaUsuarioID;
        }
        else {
            let vacio = [];
            console.log("No hay encuestas por ese ID")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}


// Borro usuarios
export const deleteUsuario = async function (id_user) {
    let url = urlWebServices.deleteUsuario;
    const formData = new URLSearchParams();
    formData.append('id', id_user);

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

// Traer reporte
export const getReporte = async function () {
    let url = urlWebServices.getReporte;

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
            return listaUsuarios;
        }
        else {
            let vacio = [];
            console.log("No hay encuestas")
            return (vacio);

        }
    }
    catch (error) {
        console.log("error", error);
    };
}

