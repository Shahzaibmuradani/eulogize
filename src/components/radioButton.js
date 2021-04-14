import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({onPress, containerStyle, status})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.container, {...containerStyle}]}>
            {status == "checked" &&<View style={styles.subDiv}/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width:20,
        height:20,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#0463B3',
        justifyContent:'center',
        alignItems:'center'
    },
    subDiv: {
        width:15,
        height:15,
        borderRadius:15,
        backgroundColor:'#0463B3'
    }
})