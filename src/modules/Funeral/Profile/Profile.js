import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground,  ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import {
  PlatformOS,
  StatusBarColor,
  RedColor,
  OrangeColor,
  YellowColor,
  fontWhite,
  SHeight,
  DarkStatusBarColor
} from '../../../utils/Constants';
import Header from '../../../components/Header';
import styles from './styles';
import {profile_pic, eye} from '../../../assets/images/Images';
import Divider from '../../../components/Divider'


const FuneralHome = ({navigation}) => {
    const [showCalander, setShowCalander] = useState(false)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        <Header
          PlatformOS={PlatformOS}
          backIcon={true}
          onLeftIconPress={()=>{}}
          onRightIconPress={()=>{setShowCalander(true)}}
          searchBar={false}
          onSearch={(x)=>{}}
          RightComonent={()=> <Text style={{color:'#fff',textAlign:'center'}}>EDIT</Text>}
          title="PROFILE"
          navigation={navigation}
        />
        <View style={[styles.profileImageContainer, {backgroundColor:StatusBarColor}]}>
          <View style={styles.profilePic}>
            <Image source={profile_pic} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                          style={{height: 40,color:"black"}}
                          placeholder="First Name"
                          placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                      {/* <Image source={eye} style={styles.formImages} /> */}
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                          style={{height: 40,color:"black"}}
                          placeholder="Last Name"
                          placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                      {/* <Image source={eye} style={styles.formImages} /> */}
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                          style={{height: 40,color:"black"}}
                          placeholder="Email"
                          placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                      {/* <Image source={eye} style={styles.formImages} /> */}
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>
              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                          style={{height: 40,color:"black"}}
                          placeholder="Password"
                          placeholderTextColor={'grey'}
                          secureTextEntry={true}
                      />
                  </View>
                  <View style={styles.w20}>
                      <Image source={eye} style={styles.formImages} />
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                          style={{height: 40,color:"black"}}
                          placeholder="Confirm Password"
                          placeholderTextColor={'grey'}
                          secureTextEntry={true}
                      />
                  </View>
                  <View style={styles.w20}>
                      <Image source={eye} style={styles.formImages} />
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                          style={{height: 40,color:"black"}}
                          placeholder="Bank Account Information (optional)"
                          placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                      {/* <Image source={eye} style={styles.formImages} /> */}
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
  
export default FuneralHome;