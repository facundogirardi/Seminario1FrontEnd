import React, { Component } from 'react';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import "./Encuesta.css";
import logo from './continuar.jpg';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';


class Encuesta extends Component{
  
  constructor(props){
    super(props)  
    this.state = {

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }

  onCompleteComponent = () => {
    this.setState({
      isCompleted:true
    })
  }

  render(){
    
    var json = {
      pages: [

        {
          questions: [
            {
              type: "dropdown",
              name: "Actividad",
              title: "Selecciona tu sector de actividad",
              isRequired: true,
              colCount: 0,
              choices: [
                  "01 Elaboraciòn de productos alimenticios y/o bebidas",
                  "02 Fabricación de productos textiles",
                  "03 Producción de madera y fabricación de productos de madera, corcho y paja, excepto muebles",
                  "04 Fabricación de papel y productos de papel",
                  "05 Fabricación de sustancias y productos químicos"
              ]
          },
          {
            type: "radiogroup",
            name: "1",
            title: "¿Hay recomposicion o liquidacion de stock de materias primas?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Si",
                "No"
            ]
        },
        {
          type: "radiogroup",
          name: "2",
          title: "¿Que tipo de PyME avanza a mayor velocidad?",
          isRequired: true,
          colCount: 1,
          choices: [
              "Industriales",
              "SSI",
              "NS/NC"
          ]
      },
      {
        type: "radiogroup",
        name: "3",
        title: "¿Cual es el clima laboral en este segmento empresarial?",
        isRequired: true,
        colCount: 1,
        choices: [
            "Muy Bueno",
            "Bueno",
            "Malo"
        ]
    },
    {
      type: "radiogroup",
      name: "4",
      title: "¿Hay riesgo de falta de entrega de los proveedores?",
      isRequired: true,
      colCount: 1,
      choices: [
          "Si",
          "No",
          "No corresponde"
      ]
  },
          ]
      },
        {
          "questions": [
              {
                  "name": "name",
                  "type": "text",
                  "title": "Razon social de la empresa:",
                  "placeHolder": "",
                  "isRequired": true
              }, 
              {
                type: "radiogroup",
                name: "tamaño",
                title: "Indique tamaño de su empresa",
                isRequired: true,
                colCount: 1,
                choices: [
                    "Micro : 0-9 ocupados.",
                    "Pequeña : 10-50 ocupados.",
                    "Mediana : 51-250 ocupados.",
                    "Grande : Mas de 800 ocupados."
                ]
            },
              {
                type: "dropdown",
                name: "region",
                title: "Elija su region",
                isRequired: true,
                colCount: 0,
                choices: [
                  "Buenos Aires",
                  "Capital Federal",
                  "Catamarca",
                  "Chaco",
                  "Chubut",
                  "Córdoba",
                  "Entre Ríos",
                  "Corrientes",
                  "Formosa",
                  "Jujuy",
                  "La Pampa",
                  "La Rioja",
                  "Mendoza",
                  "Misiones",
                  "Neuquén",
                  "Río Negro",
                  "Salta",
                  "San Juan",
                  "San Luis",
                  "Santa Cruz",
                  "Santa Fe",
                  "Santiago del Estero",
                  "Tierra del Fuego",
                  "Tucumán"
                ]
            },
            {
              name: "antiguedad",
              type: "text",
              inputType: "date",
              title: "Activo desde :",
              isRequired: false
          },
              {
                  "name": "email",
                  "type": "text",
                  "inputType": "email",
                  "title": "Correo electronico",
                  "placeHolder": "",
                  "isRequired": true,
                  "validators": [
                      {
                          "type": "email"
                      }
                  ]
              }
          ]
        }
    ]
  };
  var surveyRender = !this.state.isCompleted ? (
    <Survey.Survey
    json={json}
    showCompletedPage={false}
    onComplete={this.onCompleteComponent}
    />
  ) : null

  var onSurveyCompletion = this.state.isCompleted ? (
      <center><h1 fontFamily= "Bauer Bodoni">¡Gracias por utilizar el Termometro PyME!
          <Link to="/Resultados">
          <IconButton edge="end" className={SendIcon} color="inherit" aria-label="menu">
            <Button 
                variant="contained"
                color="primary"
                className={Button}>
                Visualizar Dashboard
            </Button>
          </IconButton>
          </Link></h1>
        <img src={logo} width="auto" alt="Logo Fundacion"/></center>
    
  ) : null;
  
  return (
    <Page pageTitle={'Usted esta en la ventana de encuesta.'}>
      
      <Scrollbar
        
        style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}
      >
      <div>
        {surveyRender}
        {onSurveyCompletion}
      </div>
      <br/>
      </Scrollbar>
      <Footer/>
    </Page>
    
  );
  }
}

export default Encuesta;

