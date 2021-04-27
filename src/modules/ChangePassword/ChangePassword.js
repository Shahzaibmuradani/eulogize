import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import {PlatformOS, StatusBarColor} from '../../utils/Constants';
import {eye} from '../../assets/images/Images'

import Divider from '../../components/Divider'
import Button from '../../components/SolidButton'


const ChangePassword = ({navigation}) => {
    const [checked, setChecked] = useState(1);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:StatusBarColor}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    PlatformOS={PlatformOS}
                    backIcon={PlatformOS == "ios"}
                    onLeftIconPress={()=>{}}
                    searchBar={false}
                    title="CHANGE PASSWORD"
                    navigation={navigation}
                />
               <View style={styles.container}>
                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                style={{height: 40,color:"black"}}
                                placeholder="Old Password"
                                placeholderTextColor={'grey'}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.w20}>
                            <Image source={eye} style={styles.formImages} />
                        </View>
                    </View>
                    <Divider styles={{marginBottom:10}}/>

                    <View style={styles.flexRow}>
                        <View style={styles.w80}>
                            <TextInput
                                style={{height: 40,color:"black"}}
                                placeholder="New Password"
                                placeholderTextColor={'grey'}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.w20}>
                            <Image source={eye} style={styles.formImages} />
                        </View>
                    </View>
                    <Divider styles={{marginBottom:10}}/>

                    <View style={styles.flexRow}>
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
                    <Divider styles={{marginBottom:10}}/>

                    <Button 
                        onPress={()=>{
                            // if(userType == "user"){
                            //     navigation.navigate("UserHome")
                            // }else{
                            //     navigation.navigate("FuneralHome")
                            // }
                        }}
                        text={"SAVE"} 
                        style={{marginTop:20}}
                    />
               </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChangePassword;