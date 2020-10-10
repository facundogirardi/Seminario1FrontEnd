import React from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import ABMTipo from "./ABM-Tipo"

function ABM(){

  return (
    <Page pageTitle={'Administrador de encuestas'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}>
      <ABMTipo/>
      </Scrollbar>
      <Footer/>
    </Page>
  );
}


export default ABM;