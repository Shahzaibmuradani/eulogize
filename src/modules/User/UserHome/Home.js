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
const UserHome = ({navigation}) => {
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        {PlatformOS == "android" &&<Header/>}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={background_splash} style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Button
                onPress={()=>{navigation.navigate("DonationForm")}}
                textStyle={{color:fontWhite, fontWeight:'normal'}}
                text={"REQUEST FOR DONATION"} 
                style={{backgroundColor:RedColor, width:'100%', marginBottom:30}}/>
            <Button
                onPress={()=>{navigation.navigate("RequestFuneral")}}
                textStyle={{color:RedColor, fontWeight:'normal'}}
                text={"DONATION"} 
                style={{width:'100%'}}/>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  export default UserHome;