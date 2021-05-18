import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {go_right_icon, toggle_off_icon,toggle_on_icon, edit_icon} from '../../../assets/images/Images'
import Divider from '../../../components/Divider'
import styles from './styles'
import Header from '../../../components/Header';
import {
    PlatformOS,
    StatusBarColor,
    RedColor,
    fontWhite,
  } from '../../../utils/Constants';

const UserSettings = ({navigation}) => {

    const [toggle, setToggle] = useState(true)

    return(
        <SafeAreaView style={styles.container}>
            {PlatformOS == "android" &&<Header navigation={navigation}/>}
            <View style={{padding:20, backgroundColor:'#fff', flex:1}}>
                <View style={[styles.rows]} >
                        <Text style={styles.text}>NOTIFICATION</Text>
                    <TouchableOpacity onPress={()=>setToggle(!toggle)}>
                        <Image source ={ toggle ? toggle_on_icon :toggle_off_icon} style={styles.notification_image}/>
                    </TouchableOpacity>
                </View>
                <Divider/>

                <TouchableOpacity onPress={()=>navigation.navigate('PaymentMethod')} style={styles.rows}>
                    <Text style={styles.text}>PAYMENT METHOD</Text>
                    <Image source ={edit_icon} style={styles.image}/>
                </TouchableOpacity>
                <Divider/>

                <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={styles.rows}>
                    <Text style={styles.text}>PROFILE</Text>
                    <Image source ={go_right_icon} style={styles.image}/>
                </TouchableOpacity>
                <Divider/>

                <TouchableOpacity onPress={()=>navigation.navigate('AboutUs')} style={styles.rows}>
                    <Text style={styles.text}>ABOUT US</Text>
                    <Image source ={go_right_icon} style={styles.image}/>
                </TouchableOpacity>
                <Divider/>

                <TouchableOpacity onPress={()=>navigation.navigate('PrivacyPolicy')} style={styles.rows}>
                    <Text style={styles.text}>PRIVACY POLICY</Text>
                    <Image source ={go_right_icon} style={styles.image}/>
                </TouchableOpacity>
                <Divider/>

                <TouchableOpacity onPress={()=>navigation.navigate('FAQ')} style={styles.rows}>
                    <Text style={styles.text}>FAQs</Text>
                    <Image source ={go_right_icon} style={styles.image}/>
                </TouchableOpacity>
                <Divider/>

                <TouchableOpacity onPress={()=>navigation.navigate('ChangePassword')} style={styles.rows}>
                    <Text style={styles.text}>CHANGE PASSWORD</Text>
                    <Image source ={go_right_icon} style={styles.image}/>
                </TouchableOpacity>
                <Divider/>
                
                <TouchableOpacity onPress={()=>{
                    Alert.alert(
                        "Logout",
                        "Do you want to logout?",
                        [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => navigation.navigate('StartScreen') }
                        ]
                    )
                }} style={styles.rows}>
                    <Text style={styles.text}>LOGOUT</Text>
                    <Image source ={go_right_icon} style={styles.image}/>
                </TouchableOpacity>
                <Divider/>
            </View>
        </SafeAreaView>
    )
}

export default UserSettings;