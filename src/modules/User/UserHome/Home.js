import React, {useEffect, useState} from 'react';
import {SafeAreaView,Text,View,ScrollView, ImageBackground, Image} from 'react-native';
import {
  PlatformOS,
  StatusBarColor,
  RedColor,
  fontWhite,
} from '../../../utils/Constants';
import Header from '../../../components/Header';
import styles from './styles';
import {background_splash, logo} from '../../../assets/images/Images';
import Button from '../../../components/BorderButton';
import { useSelector } from 'react-redux';

const UserHome = ({navigation}) => {
    const userType = useSelector(state => state.userType.userType)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        {PlatformOS == "android" &&<Header navigation={navigation}/>}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={background_splash} style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Button
                onPress={()=>{navigation.navigate(userType == "user" ? "DonationForm" :"ViewRequest")}}
                textStyle={{color:fontWhite, fontWeight:'normal'}}
                text={userType == "user" ? "REQUEST FOR DONATION" : "VIEW REQUESTS"} 
                style={{backgroundColor:RedColor, width:'100%', marginBottom:30}}/>
            <Button
                onPress={()=>{navigation.navigate(userType == "user" ? "RequestFuneral" : "ViewPayments")}}
                textStyle={{color:RedColor, fontWeight:'normal'}}
                text={userType == "user" ? "DONATION" : "VIEW PAYMENTS"} 
                style={{width:'100%'}}/>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  export default UserHome;