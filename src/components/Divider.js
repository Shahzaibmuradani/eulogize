import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({onPress, style, text, textStyle, styles})=>{
    return(
        <View style={{borderBottomColor: "#D92334",borderBottomWidth: 0.5, ...styles}}/>
    )
}