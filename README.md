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

## FrontEnd

* Descargar la aplicacion del repositorio https://github.com/facundogirardi/Seminario1FrontEnd
* En la carpeta del proyecto ejecutar <b>npm install</b>
* <b>cd</b> .\Seminario1BackEnd\
* Ejecutar <b>npm start</b>
* Se levantará en local http://localhost:3000/

Para apuntar al Backend de Heroku :
* Ingresar a ./src/controller/webServices.js
* comentar la linea <b>const urlApi = "http://localhost:4000/";</b>

## BackEnd

* El backend de la aplicacion se encuesta en ek siguiente repositorio https://github.com/facundogirardi/Seminario1BackEnd
* En la carpeta del proyecto ejecutar <b>npm install</b>
* <b>cd</b> .\Seminario1FrontEnd\
* Ejecutar <b>npm start</b> o <b>nodemon --exec npm start</b> (Requiere tener instalado el nodemon*)
* Se levantará en local http://localhost:4000/
* Tambien se encuentra hosteado en Heroku <b>https://seminario1-backend.herokuapp.com/<b>

## Base de Datos

<p>Para la base de datos utilizamos MongoDB</p>
<p>Poseemos el siguiente Cluster configurado <b>backendseminario1.k3wui.mongodb.net</b></p>
<p>En la ruta /Seminario1BackEnd/models, se encuentran los modelos de datos para los documentos</p>

## Trello

<img src="https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNzPQNRjqhR8fXE0pnu_bRyNmfc8xXr2VQUJTfJ9A" width="64" height="64" />


https://trello.com/b/z1BKBdrK/gesti%C3%B3n-de-stock-y-calidad-al-cliente

## Recursos

- GIT: <https://github.com/facundogirardi/Seminario1FrontEnd>
- GIT: <https://github.com/facundogirardi/Seminario1BackEnd>