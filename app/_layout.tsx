
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from './LoginScreen';  

import HomeScreen from './HomeScreen';  

export default function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
