import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import * as firebase from "firebase";
const Stack = createStackNavigator();


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAH6iwgoIuNIZke1xsTUDbDOp0XIO0Mso",
    authDomain: "insta-ff1ad.firebaseapp.com",
    projectId: "insta-ff1ad",
    storageBucket: "insta-ff1ad.appspot.com",
    messagingSenderId: "839402910225",
    appId: "1:839402910225:web:80d8ee5484a14b1216f7b0",
    measurementId: "G-Z514Y1KJYV"
};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name='Landing' component={LandingScreen}
                          options={{headerShown:false}} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen}
                          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


