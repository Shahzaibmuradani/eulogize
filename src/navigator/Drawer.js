import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {background_splash} from '../assets/images/Images';
import {StatusBarColor, HeadingMedium, fontWhite, CreamColor, SHeight, lightPink, RedColor} from '../utils/Constants';
import Button from '../components/BorderButton';

export default (props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Text style={styles.avatarHeading}>Johnnie Hudson</Text>
                <View style={styles.avatarCircle}>
                    <View style={styles.avatarSubCircle}>
                        <Image source={background_splash} />
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentScrollContainer}>
                <View style={styles.contentContainer}>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowHeading}>MY REQUEST(S)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowHeading}>PRIVACY POLICY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowHeading}>SETTINGS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.row}>
                        <Text style={styles.rowHeading}>FAQs</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    onPress={()=>{console.log('submit')}}
                    textStyle={{color:RedColor, fontWeight:'normal'}}
                    text={"LOGOUT"}
                    style={{width:'50%', backgroundColor:CreamColor}}
                    />
            </ScrollView>
        </View>
    )
}









const styles= StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor:'#fff',
    },
    avatarContainer: {
        height:110,
        backgroundColor:StatusBarColor,
        width:'100%',
        zIndex:200
    },
    avatarHeading: {
        textAlign:'center',
        fontSize:HeadingMedium,
        fontWeight:'500',
        color:fontWhite,
        margin:20
    },
    avatarCircle: {
        height:100,
        width:100,
        borderRadius:100,
        backgroundColor:StatusBarColor,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    avatarSubCircle: {
        height:'80%',
        width:'80%',
        borderRadius:100,
        backgroundColor:'red',
        overflow:'hidden',
    },
    contentScrollContainer: {
        backgroundColor:CreamColor,
    },
    contentContainer: {
        minHeight:SHeight * 0.6,
        paddingTop:100,
        paddingHorizontal:20
    },
    row: {
        width:'100%',
        borderBottomWidth:1,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:lightPink,
    },
    rowHeading: {
        fontSize:HeadingMedium
    }
})