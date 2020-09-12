/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import PrivateRoute from 'base-shell/lib/components/PrivateRoute/PrivateRoute'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'
import { Route } from 'react-router-dom'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About/About'))
const Encuesta = lazy(() => import('../pages/Encuesta/Encuesta'))
const ABM = lazy(() => import('../pages/ABM/ABM'))
const Preguntas = lazy(() => import('../pages/Preguntas/Preguntas'))
const Resultados = lazy(() => import('../pages/Resultados/Resultado'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <PublicRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  <Route path="/about" exact component={About} />,
  <PrivateRoute path="/Encuesta" exact component={Encuesta} />,
  <PrivateRoute path="/ABM" exact component={ABM} />,
  <PrivateRoute path="/Preguntas" exact component={Preguntas} />,
  <PrivateRoute path="/Resultados" exact component={Resultados} />,
]

export default routes
