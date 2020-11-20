import React, { lazy } from 'react'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'

const SignIn = lazy(() => import('../components/SignIn/SignIn'))
const Administrador = lazy(() =>import ('../components/Administrador/admin'))
const About = lazy(() => import('../components/About/About'))
const Encuesta = lazy(() => import('../components/Encuesta/Encuesta'))
const ABEncuestas = lazy(() => import('../components/ABEncuestas/ABEncuestas'))
const Resultados = lazy(() => import('../components/Resultados/Resultado'))
const Contacto = lazy(() => import('../components/Contacto/Contacto'))
const NuevaEncuesta = lazy(() => import('../components/ABEncuestas/EditForm.js'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/administrador" component={Administrador} exact/>,
  <PublicRoute path="/about" exact component={About} />,
  <PublicRoute path="/Encuesta" exact component={Encuesta} />,
  <PublicRoute path="/ABEncuestas" exact component={ABEncuestas} />,
  <PublicRoute path="/Resultados" exact component={Resultados} />,
  <PublicRoute path="/Contacto" exact component={Contacto} />,
  <PublicRoute path="/NuevaEncuesta" exact component={NuevaEncuesta} />,
]

export default routes
