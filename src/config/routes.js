import React, { lazy } from 'react'
import PrivateRoute from 'base-shell/lib/components/PrivateRoute/PrivateRoute'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'

const SignIn = lazy(() => import('../components/SignIn/SignIn'))
const Administrador = lazy(() =>import ('../components/Administrador/admin'))
const About = lazy(() => import('../components/About/About'))
const Encuesta = lazy(() => import('../components/Encuesta/Encuesta'))
const ABM = lazy(() => import('../components/ABM/ABM'))
const Resultados = lazy(() => import('../components/Resultados/Resultado'))
const Contacto = lazy(() => import('../components/Contacto/Contacto'))
const NuevaEncuesta = lazy(() => import('../components/ABM/EditForm.js'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/administrador" component={Administrador} exact/>,
  <PublicRoute path="/about" exact component={About} />,
  <PublicRoute path="/Encuesta" exact component={Encuesta} />,
  <PublicRoute path="/ABM" exact component={ABM} />,
  <PublicRoute path="/Resultados" exact component={Resultados} />,
  <PublicRoute path="/Contacto" exact component={Contacto} />,
  <PublicRoute path="/NuevaEncuesta" exact component={NuevaEncuesta} />,
]

export default routes
