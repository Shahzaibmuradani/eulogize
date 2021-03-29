import React, {useEffect, useState} from 'react';
import {SafeAreaView,Text,View,} from 'react-native';
import { useSelector } from 'react-redux';
const FuneralHome = () => {
  const userType = useSelector((state)=>state.userType)
  console.log(userType.userType)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Funeral
        </Text>
      </View>
    );
  }
  
  export default FuneralHome;