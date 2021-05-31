import React, { lazy } from 'react'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'

const Gerente = lazy(() => import('../components/Gerente/Gerente'))
const Operador = lazy(() => import('../components/Operador/Operador'))
const Envio = lazy(() => import('../components/Envio/Envio'))
const Contacto = lazy(() => import('../components/Contacto/Contacto'))


const routes = [

  <PublicRoute path="/Gerente" exact component={Gerente} />,
  <PublicRoute path="/Operador" exact component={Operador} />,
  <PublicRoute path="/Contacto/" exact component={Contacto} />,
  <PublicRoute path="/Envio/:id" exact component={Envio} />,

]

export default routes