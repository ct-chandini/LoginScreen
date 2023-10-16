/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  Image, Alert,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Stylesheet from './android/Screens/Config.js/Stylesheet';
import HomeScreen from './android/Screens/HomeScreen';
import Login from './android/Screens/Login';

const Stack = createStackNavigator();


function App(): JSX.Element {

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
