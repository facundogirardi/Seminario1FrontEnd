import React, { useState } from "react";
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Footer from '../Footer/Footer';
import EnhancedTable from './tabla_admin'
import Altausuario from './Altausuario'

export default function AbmUsuarios() {

  return (
    <Page pageTitle={'Administrador de usuarios'}>
      <Scrollbar style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}>
        <br />
        <EnhancedTable />
        <Altausuario />
      </Scrollbar>
      <Footer />
    </Page>
  );
}