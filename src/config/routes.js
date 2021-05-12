import React, { lazy } from 'react'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'


const Administrador = lazy(() =>import ('../components/Administrador/admin'))
const Gerente = lazy(() => import('../components/Gerente/Gerente'))
const Operador = lazy(() => import('../components/Operador/Operador'))
const Contacto = lazy(() => import('../components/Contacto/Contacto'))


const routes = [

  <PublicRoute path="/administrador" component={Administrador} exact/>,
  <PublicRoute path="/Gerente" exact component={Gerente} />,
  <PublicRoute path="/Operador" exact component={Operador} />,
  <PublicRoute path="/Contacto/:id" exact component={Contacto} />,

]

export default routes