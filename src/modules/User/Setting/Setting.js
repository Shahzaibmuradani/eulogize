import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {go_right_icon, toggle_off_icon,toggle_on_icon, edit_icon} from '../../../assets/images/Images'
import Divider from '../../../components/Divider'
import styles from './styles'
const UserSettings = ({navigation}) => {

    const [toggle, setToggle] = useState(true)


    return(
        <SafeAreaView >
           
            <View style={{padding:20}}>
                <View style={[styles.rows]} >
                        <Text style={styles.text}>NOTIFICATION</Text>
                    <TouchableOpacity onPress={()=>setToggle(!toggle)}>
                        <Image source ={ toggle ? toggle_on_icon :toggle_off_icon} style={styles.notification_image}/>
                    </TouchableOpacity>
                </View>
                <Divider/>

                <TouchableOpacity style={styles.rows}>
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
            </View>
        </SafeAreaView>
    )
}

export default UserSettings;