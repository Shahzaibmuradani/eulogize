import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,ImageBackground, TextInput, Image,Dimensions } from 'react-native';
import {background_splash, logo,tick,eye} from '../../assets/images/Images'
import Button from '../../components/SolidButton'
import Divider from '../../components/Divider'
import { CheckBox } from 'react-native-elements';
import {RedColor} from "../../utils/Constants"
import { useSelector } from 'react-redux';



const SHeight =  Dimensions.get('window').height

const LoginScreen = ({navigation})=>{
    const [check, setCheck] = React.useState(true)
    const userType = useSelector(state => state.userType.userType)
    return(
        <View style={styles.container}>
            <ImageBackground source={background_splash} style={styles.background}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.childContainer}>
                
                <View style={styles.flexRow}>
                    <View style={styles.w80}>
                        <TextInput
                            style={{height: 40,color:"black"}}
                            placeholder="Email"
                            placeholderTextColor={'grey'}
                        />
                    </View>

                    <View style={styles.w20}>
                        <Image source={tick} style={styles.formImages} />
                    </View>
                </View>
                <Divider/>

                <View style={styles.flexRow}>
                    <View style={styles.w80}>
                        <TextInput
                            style={{height: 40,color:"black"}}
                            placeholder="Password"
                            placeholderTextColor={'grey'}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles.w20}>
                        <Image source={eye} style={styles.formImages} />
                    </View>
                </View>
                <Divider/>

                <View style={styles.flexRow}>
                    <CheckBox
                        onPress={()=>setCheck(!check)}
                        center
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor={RedColor}
                        uncheckedColor={RedColor}
                        checked={check}
                        size={20}
                        containerStyle={{width:"5%", }}
                    />
                    <Text style={styles.rememberText}>Remember Me</Text>
                    <TouchableOpacity style={{width:"40%",justifyContent:'center'}}
                        onPress={()=>navigation.navigate("ForgotPassword")}>
                        <Text
                            style={{
                            fontSize:12,
                            textAlign:"right",
                            fontFamily:"Roboto-Regular",
                            alignSelf:"center", 
                            color:RedColor,
                            textDecorationLine: 'underline'}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <Button 
                    onPress={()=>{
                        if(userType == "user"){
                            navigation.navigate("UserHome")
                        }else{
                            navigation.navigate("FuneralHome")
                        }
                    }}
                    text={"LOGIN"} 
                    style={{marginTop:20}}
                    />
                <TouchableOpacity>
                    <Text style={{fontFamily:"Roboto-Light", alignSelf:"center", marginTop:20}}>
                        Don't have an account? <Text style={{color:RedColor, fontFamily:"Roboto-Medium"}}>SINGUP</Text>
                    </Text>
                </TouchableOpacity>
                <Text style={{fontSize:12,fontFamily:"Roboto-Regular",textDecorationLine: 'underline', marginTop:40, alignSelf:"center"}}>Terms And Conditions</Text>
            </View>
        </ImageBackground>
       
        
      </View>
    )
}
export default LoginScreen;
const styles=StyleSheet.create({
    container:{
      flex: 1,flexDirection: "column"
    },
    background:{
      flex: 1,resizeMode: "cover",justifyContent: "center"
    },
    logo:{
      alignSelf:'center', height:150, width:150, resizeMode:'contain', transform:[{translateY:-SHeight/44}]
    },
    childContainer:{
        padding:60
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
    rememberText:{
        width:"40%", fontSize:12, textAlign:"left",fontFamily:"Roboto-Regular", alignSelf:"center" 
    },
    forgotText:{
        width:"40%", fontSize:12,textAlign:"right",fontFamily:"Roboto-Regular",alignSelf:"center", 
        color:RedColor,textDecorationLine: 'underline'
    }

  })