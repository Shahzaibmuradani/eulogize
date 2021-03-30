import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {bottomBar} from '../assets/images/Images';
import {HeadingLarge, StatusBarColor} from '../utils/Constants';
export default ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.home} />
            </View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.message} />
            </View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.donations} />
            </View>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.settings} />
            </View>

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
        width:20,
        height:35
    },
    text:{
        fontFamily:"Roboto-Bold",
        color:"#D92334",
        fontSize:HeadingLarge
    }
})