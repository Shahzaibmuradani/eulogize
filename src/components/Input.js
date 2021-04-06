import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import { dropdown_icon, location_icon, attachment_icon } from "../assets/images/Images";
import { TextInput } from 'react-native-gesture-handler';
import Divider from './Divider';

export default ({onPress, style, text, textStyle, type, value, placeholder,onChangeText, options})=>{
    return(
        <View style={{width:"100%",paddingTop:20}}>
            <View style={{flexDirection:'row'}}>
                <TextInput
                        style={type ?  styles.w80 : styles.w100}
                        value={value}
                        placeholder={"value"} 
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={'grey'}
                    />
                { type === "dropdown" &&
                    <TouchableOpacity style={styles.w20}
                    onPress={onPress}>
                        <Image 
                        source={dropdown_icon} 
                        style={styles.icon}/>
                    </TouchableOpacity>
                }
                { type === "location" &&
                    <TouchableOpacity style={styles.w20}
                    onPress={onPress}>
                        <Image 
                            source={location_icon} 
                            style={styles.icon}/>
                    </TouchableOpacity>
                }
                { type === "attachment" &&
                    <TouchableOpacity style={styles.w20}
                    onPress={onPress}>
                        <Image 
                            source={attachment_icon} 
                            style={styles.icon}/>
                    </TouchableOpacity>
                }
            </View>
            <Divider/>
        </View>
    )
}

const styles = StyleSheet.create({
    w80:{
        width:"80%", 
        fontSize:15, 
        paddingHorizontal:10, 
        paddingVertical:10,
        fontFamily:"Roboto-Light",
    },
    w100:{
        width:"100%", 
        fontSize:15, 
        paddingHorizontal:10, 
        paddingVertical:10,
        fontFamily:"Roboto-Light",
    },
    w20:{
        width:"20%", 
        justifyContent:'center'
    },
    icon:{
        height:18, 
        width:18, 
        alignSelf:'center', 
        resizeMode:'contain'
    }
})