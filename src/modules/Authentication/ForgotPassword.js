import * as React from 'react';
import {useState} from 'react'
import { View, TouchableOpacity, Text, StyleSheet,SafeAreaView, TextInput, Image,Dimensions,StatusBar } from 'react-native';
import { tick,} from '../../assets/images/Images'
import Button from '../../components/SolidButton'
import Divider from '../../components/Divider'
import ModalComponent from '../../components/Modal'
import {RedColor, StatusBarColor} from "../../utils/Constants"
import Header from '../../components/Header'

const SHeight =  Dimensions.get('window').height



const ForgotPassword = ({navigation})=>{
    
    const [visibility, setVisibility] =useState(false)
    return(
       <>
       <StatusBar
            backgroundColor={StatusBarColor}
            barStyle={"light-content"}
            hidden={false}
             />
        <SafeAreaView style={styles.container, {backgroundColor:"#701982"}}>
            <ModalComponent 
                text1={"Your reset Password link"}
                text2={"succesfully sent to your given email"} 
                visibility={visibility} 
                showButton ButtonText={"Login"} ButtonStyle={{marginTop:20, width:"50%"}}
                onPress={()=>{setVisibility(!visibility); navigation.navigate("LoginScreen")}}/>

            <Header title={"Forgot Password"} showWhiteBackIcon navigation={navigation}/>
            <View style={styles.childContainer}>
                <Text style={styles.resetText}>Password Reset</Text>
                <Text style={[styles.subText,{marginTop:10}]}>Enter email address to send</Text>
                <Text style={styles.subText}>reset password link</Text>
                
                <View style={[styles.flexRow,{marginTop:40}]}>
                    <View style={styles.w80}>
                        <TextInput
                            style={styles.formInput}
                            placeholder="JohnHudson@gmail.com"
                            placeholderTextColor={'grey'}
                        />
                    </View>

                    <View style={[styles.w20, ]}>
                        <Image source={tick} style={styles.formImages} />
                    </View>
                </View>
                <View style={{width:"100%"}}>
                    <Divider/>
                </View>

                <Button text={"SEND"} style={{marginTop:40}} onPress={()=>{ setVisibility(!visibility)}}/>

            </View>
        </SafeAreaView>
        </>
    )
}
export default ForgotPassword;
const styles=StyleSheet.create({
    container:{
      flex: 1,flexDirection: "column"
    },
    background:{
      flex: 1,resizeMode: "cover",justifyContent: "center"
    },
    
    childContainer:{
        padding:60,
        alignItems:'center',
        backgroundColor:"white",
        minHeight:SHeight
    },
    resetText:{
        fontSize:18,
        fontFamily:"Roboto-Medium"
    },
    subText:{
        fontSize:16,
        fontFamily:"Roboto-Light"
    },
    flexRow:{
        flexDirection:'row'
    },
    w80:{
        width:"80%", justifyContent:'center',paddingLeft:10
    },
    w20:{
        width:"20%", justifyContent:'center',
    },
    formImages:{
        height:15, width:15, alignSelf:'center',resizeMode:'contain'
    },
    formInput:{
        height: 40,color:"black"
    }

  })