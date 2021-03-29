import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import {DrawerContent} from './components/DrawerContent'
import StartScreen from '../modules/Authentication/StartScreen'
import UserHome from '../modules/User/UserHome/Home'
import FuneralHome from '../modules/Funeral/FuneralHome/Home'
import LoginScreen from '../modules/Authentication/LoginScreen'
import ForgotPassword from '../modules/Authentication/ForgotPassword'


function Navigator({setConnetion, isConnected}) {
    const Stack = createStackNavigator();

   
    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                    }}>
                    
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="UserHome" component={UserHome} />
                    <Stack.Screen name="FuneralHome" component={FuneralHome} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

                </Stack.Navigator>
            </NavigationContainer>
      )
 
  }
export default Navigator;