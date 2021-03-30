import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {bottomBar} from '../assets/images/Images';
import {HeadingLarge, StatusBarColor} from '../utils/Constants';
export default ()=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.home} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.message} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.donations} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={bottomBar.settings} />
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
        width:20,
        height:35
    },
    text:{
        fontFamily:"Roboto-Bold",
        color:"#D92334",
        fontSize:HeadingLarge
    }
})