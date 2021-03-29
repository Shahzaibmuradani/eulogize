import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({onPress, style, text, textStyle})=>{
    return(
        <TouchableOpacity style={[styles.container, {...style}]} onPress={onPress}>
            <Text style={[styles.text, {...textStyle}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container:{
        width:"80%", 
        alignSelf:'center', 
        height:50, 
        borderColor:"#D92334",
        backgroundColor:"transparent",
        borderWidth:1.5,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:10,
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        fontFamily:"Roboto-Bold",
        fontSize:15, 
        color:"#D92334",
    }
})