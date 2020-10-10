/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import PrivateRoute from 'base-shell/lib/components/PrivateRoute/PrivateRoute'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const Administrador = lazy(() =>import ('../pages/Administrador/admin'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About/About'))
const Encuesta = lazy(() => import('../pages/Encuesta/Encuesta'))
const ABM = lazy(() => import('../pages/ABM/ABM'))
const Resultados = lazy(() => import('../pages/Resultados/Resultado'))
const Contacto = lazy(() => import('../pages/Contacto/Contacto'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <PrivateRoute path="/administrador" exact component={Administrador}/>,
  <PublicRoute path="/password_reset" redirectTo="/" exact component={PasswordReset} />,
  <PrivateRoute path="/about" exact component={About} />,
  <PublicRoute path="/Encuesta" exact component={Encuesta} />,
  <PrivateRoute path="/ABM" exact component={ABM} />,
  <PublicRoute path="/Resultados" exact component={Resultados} />,
  <PublicRoute path="/Contacto" exact component={Contacto} />,
]

export default routes
