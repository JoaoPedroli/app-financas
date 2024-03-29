import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { primary, whites } from '../styles/colors.json';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

const AuthStack = createStackNavigator();

export const AuthRoutes = () =>
<AuthStack.Navigator>
  <AuthStack.Screen
  name="SignIn"
  component={ SignIn }
  options={{headerShown: false}}
  />

  <AuthStack.Screen
  name='SignUp'
  component={ SignUp }
  options={{
    headerStyle: {
      backgroundColor: '#131313',
      borderBottomWidth: 1,
      borderBottomColor: primary,
    },
    headerTintColor: whites[0],
    headerBackTitleVisible: false,
    headerTitle: 'Voltar',
  }}
  />
</AuthStack.Navigator>
