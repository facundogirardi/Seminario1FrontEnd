/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import PrivateRoute from 'base-shell/lib/components/PrivateRoute/PrivateRoute'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'





const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const Administrador = lazy(() =>import ('../pages/Administrador/admin'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About/About'))
const Encuesta = lazy(() => import('../pages/Encuesta/Encuesta'))
const ABM = lazy(() => import('../pages/ABM/ABM'))
const Resultados = lazy(() => import('../pages/Resultados/Resultado'))
const Contacto = lazy(() => import('../pages/Contacto/Contacto'))
const ABMRadio = lazy(() => import('../pages/ABM/ABM-Radio'))
const ABMTexto = lazy(() => import('../pages/ABM/ABM-Texto'))
const ABMCheckbox = lazy(() => import('../pages/ABM/ABM-Checkbox'))
const EncuestasConfirmadas = lazy(() => import('../pages/ABM/EncuestasConfirmadas'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
    <PrivateRoute path="/administrador" exact component={Administrador}/>,
  <PublicRoute path="/password_reset" redirectTo="/" exact component={PasswordReset} />,
  <PrivateRoute path="/about" exact component={About} />,
  <PublicRoute path="/Encuesta" exact component={Encuesta} />,
  <PrivateRoute path="/ABM" exact component={ABM} />,
  <PublicRoute path="/Resultados" exact component={Resultados} />,
  <PublicRoute path="/Contacto" exact component={Contacto} />,
  <PrivateRoute path="/ABM-Radio" exact component={ABMRadio} />,
  <PrivateRoute path="/ABM-Texto" exact component={ABMTexto} />,
  <PrivateRoute path="/ABM-Checkbox" exact component={ABMCheckbox} />,
  <PrivateRoute path="/EncuestasConfirmadas" exact component={EncuestasConfirmadas} />,
]

export default routes
