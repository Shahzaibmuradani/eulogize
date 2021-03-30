import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {HeadingExtraLarge, fontWhite, HeadingMedium, RedColor} from '../utils/Constants';
import CheckBox from '@react-native-community/checkbox';
export default ({
  navigation,
  isChecked,
  onPress,
  disabled,
  dateInNumber,
  dateType,
  trial,
  price,
  backgroundColor,
  color
}) => {
    return (
      <View style={[styles.container, {backgroundColor:backgroundColor}]}>
          <View>
            <Text style={[styles.bigText, {color:color}]}>
              {dateInNumber}
              <Text style={[styles.mediumText,{color:color}]}>{dateType}</Text>
            </Text>
            <Text style={[styles.mediumText,{color:color}]}>{trial}</Text>
          </View>

          <View style={styles.divider}>

          </View>

          <View style={{justifyContent:'space-between'}}>
            <View style={styles.checkbox}>
              <CheckBox
                onCheckColor={RedColor}
                onTintColor={fontWhite}
                tintColor={fontWhite}
                onFillColor={fontWhite}
                lineWidth={2}
                style={{height:'100%', width:10}}
                boxType={'square'}
                disabled={disabled}
                value={isChecked}
                onValueChange={(newValue) => onPress(newValue)}
              />
            </View>
            <Text style={[styles.mediumText,{color:color}]}>
              $
              <Text style={[styles.bigText,{color:color}]}>
                {price}
              </Text>
            </Text>
          </View>
      </View>
    );
}
  


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:100,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    bigText: {
      fontSize:HeadingExtraLarge,
      color:fontWhite,
      fontWeight:'700'
    },
    mediumText: {
      fontSize:HeadingMedium,
      color:fontWhite,
      fontWeight:'400'
    },
    divider: {
      height:'100%',
      backgroundColor:'#fff',
      width:1,
      opacity:0.8
    },
    checkbox: {
      width:'100%',
      height:15,
      alignItems:'flex-end',
    }
})