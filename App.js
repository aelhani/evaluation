// ---------------------------------------------------------
// Evaluation : Application d’authentification de contact
// Réalisée par Abderrazak Elhani (pour Chmarkh Kaoutar)
// ** React Native Specialist
// ** https://www.linkedin.com/in/elhani
// ** (+212) 653 68 65 68
// ---------------------------------------------------------

import React from 'react'

import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from './Assets/Screens/Login'
import Account from './Assets/Screens/Account'

const Screens = createStackNavigator({
  Login: { screen: Login },
  Account: { screen: Account },
}, { headerMode: 'none' })

const Container = createAppContainer(Screens)

export default () => (

  <Container />

);

