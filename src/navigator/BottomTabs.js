import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {bottomBar} from '../assets/images/Images';
import {HeadingLarge, StatusBarColor, SWidth} from '../utils/Constants';
import { useSelector } from 'react-redux';

export default ({navigation})=>{
    const userType = useSelector(state => state.userType.userType)
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate("UserHome")}>
                <Image style={styles.icon} source={bottomBar.home} />
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate("MyRequest")}>
                <Image style={styles.icon} source={bottomBar.message} />
                <Text style={styles.text}>{userType == "user" ? "My Request" : "View Payments"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate(userType == "user" ? "RequestFuneral" : "ViewPayments")} style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.donations} />
                <Text style={styles.text}>Donations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate("UserSettings")}>
                <Image style={styles.icon} source={bottomBar.settings} />
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles= StyleSheet.create({
    container:{
        width:"100%", 
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderTopColor:StatusBarColor
    },
    iconContainer: {
        width:'25%',
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:25,
        height:25
    },
    text:{
        fontSize:SWidth * 0.03
    }
})