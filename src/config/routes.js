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
const ABMRadio = lazy(() => import('../components/ABM/ABM-Radio'))
const ABMTexto = lazy(() => import('../components/ABM/ABM-Texto'))
const ABMCheckbox = lazy(() => import('../components/ABM/ABM-Checkbox'))
const EncuestasConfirmadas = lazy(() => import('../components/ABM/EncuestasConfirmadas'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/administrador" component={Administrador} exact/>,
    <PublicRoute path="/about" exact component={About} />,
  <PublicRoute path="/Encuesta" exact component={Encuesta} />,
  <PublicRoute path="/ABM" exact component={ABM} />,
  <PublicRoute path="/Resultados" exact component={Resultados} />,
  <PublicRoute path="/Contacto" exact component={Contacto} />,
  <PublicRoute path="/ABM-Radio" exact component={ABMRadio} />,
  <PublicRoute path="/ABM-Texto" exact component={ABMTexto} />,
  <PublicRoute path="/ABM-Checkbox" exact component={ABMCheckbox} />,
  <PublicRoute path="/EncuestasConfirmadas" exact component={EncuestasConfirmadas} />,
]

export default routes
