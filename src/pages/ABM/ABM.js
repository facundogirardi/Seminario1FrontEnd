import React, { Component } from 'react';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Button from '@material-ui/core/Button';

class ABM extends Component{
  
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
      questions: [
          {
              type: "checkbox",
              name: "opcion",
              title: "Que tipo de pregunta desea desarrollar?",
              isRequired: true,
              colCount: 3,
              choices: [
                  "Texto",
                  "Radio",
                  "Checkbox",
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
    <div><h1>Proxima etapa, generar las preguntas.</h1></div>
  ) : null;
  return (
    <Page pageTitle={'Usted esta en la ventana de administrador.'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
      <div>
        {surveyRender}
        {onSurveyCompletion}
      </div>
      <br/>
      <div className="Cuadrado">
        <h3>Para cargar el Excel:</h3>
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Cargar Archivo
          </Button>
        </label>
      </div>
      </Scrollbar>
    </Page>
  );
  }
}

export default ABM;
