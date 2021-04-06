import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground,  ScrollView, StyleSheet, Modal, TextInput} from 'react-native';
import {
    PlatformOS,
    StatusBarColor,
    RedColor,
    OrangeColor,
    YellowColor,
    fontWhite,
    SHeight,
    SWidth
  } from '../utils/Constants';
  import CalendarPicker from 'react-native-calendar-picker';
export default ({show, onHide, onChange})=>{
    const minDate = new Date();
    return(
        <View style={styles.container}>
            <Text style={{color:'#fff', position:'absolute', top:10, right:10}}>Close</Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={onHide}>
                    <View style={styles.centerView}>
                        <View style={{backgroundColor:'#fff', width:'100%'}}>
                            <CalendarPicker
                                minDate={minDate}
                                onDateChange={onChange}
                            />
                        </View>
                    </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position:'relative'
    },
    centerView: {
        width:SWidth,
        height:SHeight,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }
});