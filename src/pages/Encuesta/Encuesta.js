import React, { Component } from 'react';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@material-ui/icons/Send';
import "./Encuesta.css";
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


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
      "questions": [
          {
              "name": "name",
              "type": "text",
              "title": "Razon social de la empresa:",
              "placeHolder": "",
              "isRequired": false
          }, 
          {
            type: "radiogroup",
            name: "tamaño",
            title: "Indique tamaño de su empresa",
            isRequired: false,
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
            isRequired: false,
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
              "isRequired": false,
              "validators": [
                  {
                      "type": "email"
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
    <div><h1>Redirigir a preguntas.</h1></div>
    
  ) : null;
  
  return (
    <Page pageTitle={'Usted esta en la ventana de encuesta.'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
      <div>
        {surveyRender}
        {onSurveyCompletion}
      </div>
      <br/>

      <div class="BotonAtras">
          <Link to="/Preguntas">
            <IconButton edge="end" className={ArrowBackIcon} color="inherit"  aria-label="menu">
              <Button 
                variant="contained"
                color="primary"
                className={Button}
                startIcon={<ArrowBackIcon />}
                >
                Atras
              </Button>
            </IconButton>
          </Link>
          </div>
        <div class="BotonEnviar">
        <Link to="/Resultados">
        <IconButton edge="end" className={SendIcon} color="inherit" aria-label="menu">
          <Button 
              variant="contained"
              color="primary"
              className={Button}
              startIcon={<SendIcon />}>
              Enviar
          </Button>
        </IconButton>
        </Link>
        </div>
      </Scrollbar>

    </Page>
    
  );
  }
}

export default Encuesta;

