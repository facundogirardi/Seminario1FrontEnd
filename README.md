 ![version](https://img.shields.io/badge/version-1.0.0-blue.svg) 

## Presentacion del producto
![Product Presentation Image](https://i.ibb.co/jbs0TFR/Portada.png)

## Descripcion

<p>Nuestro proyecto consta en realizar una predicion de compra en Stock y mejorar la comunicacion con el cliente </p>
 
## Tabla de contenidos

* [Integrantes](#Integrantes)
* [Tecnologia](#Tecnologia)
* [Instalacion](#Instalacion)
* [Base de datos](#Base-de-datos)
* [Trello](#Trello)
* [Actualizacion 2026](#Actualizacion-2026)
* [Recursos](#Recursos)

## Integrantes Grupo 7

* Amarilla, Fernando Ezequiel         <b>Legajo : 1016533</b>
* Alvarez Jurado, Ignacio             <b>Legajo : 1096542</b>
* Girardi, Facundo Martin             <b>Legajo : 1084454</b>
* Bossero, Agustina Ailén             <b>Legajo : 1104060</b>
* Delbueno, Leonardo Gabriel          <b>Legajo : 1122125</b>
* Patricio, Matias Nicolas Rodrigo    <b>Legajo : 1108025</b>

## Tecnologia

<img src="https://i.ibb.co/GR1VxFh/material-ui.png" width="64" height="64" /><img src="https://i.ibb.co/bsJMq4X/aps-504x498-small-transparent-pad-600x600-f8f8f8-u1.jpg" width="64" height="64" />

## Instalacion

### Requisitos

* Node.js 18 o superior (probado con Node.js 24)
* El backend levantado (por defecto en http://localhost:4000/)

### FrontEnd (este repositorio)

```bash
git clone https://github.com/facundogirardi/Seminario1FrontEnd.git
cd Seminario1FrontEnd
npm install
npm start
```

* Se levantará en local http://localhost:3000/
* <b>npm run build</b> genera la versión optimizada en la carpeta <b>build/</b>
* El repositorio incluye un <b>.npmrc</b> con `legacy-peer-deps=true`, necesario porque `base-shell` y `material-ui-shell` declaran dependencias peer antiguas

Para apuntar a otro backend, definir la variable <b>REACT_APP_URL</b> (por ejemplo en un archivo <b>.env.local</b>):

```bash
REACT_APP_URL=http://localhost:4000/
```

### BackEnd

* El backend de la aplicacion se encuentra en el repositorio https://github.com/facundogirardi/Seminario1BackEnd
* Ver las instrucciones de instalación en su README

> **Nota:** el deploy en Heroku que se usó durante la cursada ya no está disponible; el backend debe levantarse en local.

## Base de Datos

<p>Para la base de datos utilizamos MongoDB</p>
<p>Poseemos el siguiente Cluster configurado <b>backendseminario1.k3wui.mongodb.net</b></p>
<p>En la ruta /Seminario1BackEnd/models, se encuentran los modelos de datos para los documentos</p>

## Trello

<img src="https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNzPQNRjqhR8fXE0pnu_bRyNmfc8xXr2VQUJTfJ9A" width="64" height="64" />


https://trello.com/b/z1BKBdrK/gesti%C3%B3n-de-stock-y-calidad-al-cliente

## Actualizacion 2026

Mantenimiento de dependencias realizado en noviembre de 2026:

* react-scripts actualizado de 3.4 a 5.0.1 (webpack 5), lo que permite compilar con versiones actuales de Node.js sin `--openssl-legacy-provider`
* React 16.14, Material-UI 4.12, react-router-dom 5.3, react-redux 7.2 y notistack actualizados a la última versión de su rama
* Se eliminaron dependencias que no se usaban en el código y se agregaron las que se usaban sin estar declaradas
* Se agregó <b>.npmrc</b> con `legacy-peer-deps=true`
* La librería `urlencode` (pensada para Node.js) se reemplazó por `encodeURIComponent`, nativa del navegador

## Recursos

- Backend: <https://github.com/facundogirardi/Seminario1BackEnd>
- Frontend: <https://github.com/facundogirardi/Seminario1FrontEnd>
- GIT: <https://github.com/facundogirardi/Seminario1BackEnd>
