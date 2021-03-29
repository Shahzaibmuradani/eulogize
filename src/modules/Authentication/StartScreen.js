import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, SafeAreaView,View,Animated, StyleSheet,Dimensions, } from 'react-native';
import {background_splash, logo} from '../../assets/images/Images'
import Button from '../../components/SolidButton'
import BorderButton from '../../components/BorderButton'
import { useDispatch } from 'react-redux';
import {setUserType} from '../../redux/userType'
import { transform } from '@babel/core';
const SWidth = Dimensions.get('window').width
const SHeight =  Dimensions.get('window').height

const StartScreen = ({navigation}) => {

  const dispatch=useDispatch()
  const opacity = useState(new Animated.Value(0))[0]
  const slideAnimations = useState(new Animated.Value(0))[0]
  const resizeAnimations = useState(new Animated.Value(0))[0]

  useEffect(()=>{
    // Animated.timing(opacity,{
    //   toValue:1,
    //   duration:5000,
    //   useNativeDriver:true
    // }).start()

    Animated.timing(slideAnimations,{
      toValue:1,
      duration:2000,
      useNativeDriver:true
    }).start()


    setTimeout(()=>{
      Animated.timing(slideAnimations,{
        toValue:2,
        duration:2000,
        useNativeDriver:true
      }).start()
    }, 2000)
    setTimeout(()=>{
      
      Animated.timing(resizeAnimations,{
        toValue:1,
        duration:2000,
        useNativeDriver:true
      }).start()
    }, 3000)

    setTimeout(()=>{
      
      Animated.timing(opacity,{
        toValue:1,
        duration:100,
        useNativeDriver:true
      }).start()
    }, 4000)

  })



    return (
      <View style={styles.container}>
        <ImageBackground source={background_splash} style={styles.background}>
          
 
          <Animated.Image source={logo} style={[styles.logo,{transform:[
            {translateY:slideAnimations.interpolate({
              inputRange: [0, 1,2],
              outputRange: [SHeight/2, 0, -SHeight/4]
             })},
            
            {scaleX:resizeAnimations.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.75]
            })},

            {scaleY:resizeAnimations.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.75]
            })},
          ]}
            
          ]}
            />
        
            
          <Animated.View style={{opacity:opacity}}>
         
            <Button 
              text={"USER LOGIN"} 
              style={{marginTop:20}}
              onPress={()=>{dispatch(setUserType("user")); navigation.navigate("LoginScreen")} }/>
            <BorderButton 
              text={"FUNERAL HOME LOGIN"} 
              style={{marginTop:20}}
              onPress={()=>{dispatch(setUserType("funeral")); navigation.navigate("LoginScreen")} } />
         
          </Animated.View>
        </ImageBackground>
       
        
      </View>
    );
  }
  
  export default StartScreen;

  const styles=StyleSheet.create({
    container:{
      flex: 1,flexDirection: "column"
    },
    background:{
      flex: 1,resizeMode: "cover",justifyContent: "center"
    },
    logo:{
      alignSelf:'center', height:200, width:200, resizeMode:'contain', position:'absolute'
    },
  })
 

  