/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import PrivateRoute from 'base-shell/lib/components/PrivateRoute/PrivateRoute'
import PublicRoute from 'base-shell/lib/components/PublicRoute/PublicRoute'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const About = lazy(() => import('../pages/About/About'))
const Encuesta = lazy(() => import('../pages/Encuesta/Encuesta'))
const ABM = lazy(() => import('../pages/ABM/ABM'))
const Resultados = lazy(() => import('../pages/Resultados/Resultado'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PrivateRoute path="/about" exact component={About} />,
  <PublicRoute path="/Encuesta" exact component={Encuesta} />,
  <PrivateRoute path="/ABM" exact component={ABM} />,
  <PublicRoute path="/Resultados" exact component={Resultados} />,
]

export default routes
