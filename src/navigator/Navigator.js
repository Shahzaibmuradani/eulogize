import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from '../modules/Authentication/StartScreen'
import UserHome from '../modules/User/UserHome/Home'
import FuneralHome from '../modules/Funeral/FuneralHome/Home'
import LoginScreen from '../modules/Authentication/LoginScreen'
import ForgotPassword from '../modules/Authentication/ForgotPassword';
import {PlatformOS} from '../utils/Constants';
import BottomBar from './BottomTabs';
import DrawerView from './Drawer';
import DonationForm from '../modules/User/DonationForm/DonationForm'
import UserSettings from '../modules/User/Setting/Setting'
import RequestFuneral from '../modules/User/RequestFuneral/RequestFuneral'
import MyRequest from '../modules/User/MyRequest/MyRequest'


function Navigator({setConnetion, isConnected}) {
    const Stack = createStackNavigator();
   
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
                }}>
                
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="UserHome" component={PlatformOS == "android" ? DrawerNavigator :TabNavigator} />
                <Stack.Screen name="FuneralHome" component={PlatformOS == "android" ? DrawerNavigator2 :TabNavigator2} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
        </NavigationContainer>
      )
 
}

const TabNavigator = ()=>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator tabBar={props => <BottomBar {...props}/>}>
            <Tab.Screen name="UserHome" component={UserHome} />
            <Tab.Screen name="DonationForm" component={DonationForm} />
            <Tab.Screen name="UserSettings" component={UserSettings} />
            <Tab.Screen name="RequestFuneral" component={RequestFuneral} />
            <Tab.Screen name="MyRequest" component={MyRequest} />
        </Tab.Navigator>
    )
}
const TabNavigator2 = ()=>{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator tabBar={props => <BottomBar {...props}/>}>
            <Tab.Screen name="FuneralHome" component={FuneralHome} />
            <Tab.Screen name="DonationForm" component={DonationForm} />
            <Tab.Screen name="UserSettings" component={UserSettings} />
            <Tab.Screen name="RequestFuneral" component={RequestFuneral} />
            <Tab.Screen name="MyRequest" component={MyRequest} />
        </Tab.Navigator>
    )
}


const DrawerNavigator = ()=>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator drawerContent={(props)=> <DrawerView {...props}/>} initialRouteName="UserHome">
            <Drawer.Screen name="UserHome" component={UserHome} />
            <Drawer.Screen name="MyRequest" component={MyRequest} />
        </Drawer.Navigator>
    )
}

const DrawerNavigator2 = ()=>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator drawerContent={(props)=> <DrawerView {...props}/>} initialRouteName="FuneralHome">
            <Drawer.Screen name="FuneralHome" component={FuneralHome} />
        </Drawer.Navigator>
    )
}
export default Navigator;