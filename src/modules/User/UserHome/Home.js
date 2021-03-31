import React, {useEffect, useState} from 'react';
import {SafeAreaView,Text,View,ScrollView, ImageBackground, Image} from 'react-native';
import {
  PlatformOS,
  StatusBarColor,
  RedColor,
  OrangeColor,
  YellowColor,
  fontWhite,
  SHeight
} from '../../../utils/Constants';
import Header from '../../../components/Header';
import styles from './styles';
import {background_splash, logo} from '../../../assets/images/Images';
import Button from '../../../components/BorderButton';
const UserHome = ({navigation}) => {
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        {PlatformOS == "android" &&<Header/>}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={background_splash} style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Button
                onPress={()=>{console.log('submit')}}
                textStyle={{color:fontWhite, fontWeight:'normal'}}
                text={"REQUEST FOR DONATION"} 
                style={{backgroundColor:RedColor, width:'100%', marginBottom:30}}/>
            <Button
                onPress={()=>{console.log('submit')}}
                textStyle={{color:RedColor, fontWeight:'normal'}}
                text={"DONATION"} 
                style={{width:'100%'}}/>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  export default UserHome;