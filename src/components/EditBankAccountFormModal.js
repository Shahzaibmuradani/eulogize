import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity, TextInput, StyleSheet, Modal} from 'react-native';
import Header from '../components/Header';
import {PlatformOS, StatusBarColor, SHeight, RedColor} from '../utils/Constants';
import {eye} from '../assets/images/Images'
import Divider from '../components/Divider'
import Button from '../components/SolidButton'


const EditBankAccountFormModal = ({navigation, visibility, onClose}) => {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibility}
            onRequestClose={() => {
            }}>
            <SafeAreaView style={{flex: 1, backgroundColor:StatusBarColor}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header
                        onBack={onClose}
                        PlatformOS={PlatformOS}
                        backIcon={PlatformOS == "ios"}
                        onLeftIconPress={()=>{}}
                        searchBar={false}
                        title="EDIT BANK ACCOUNT"
                        navigation={navigation}
                    />
                    <View style={styles.container}>
                        <View style={styles.flexRow}>
                            <View style={styles.w80}>
                                <TextInput
                                    style={{height: 40,color:"black"}}
                                    placeholder="Bank Name"
                                    placeholderTextColor={'grey'}
                                    secureTextEntry={false}
                                />
                            </View>

                            <View style={styles.w20}>
                                {/* <Image source={eye} style={styles.formImages} /> */}
                            </View>
                        </View>
                        <Divider styles={{marginBottom:10}}/>

                        <View style={styles.flexRow}>
                            <View style={styles.w80}>
                                <TextInput
                                    style={{height: 40,color:"black"}}
                                    placeholder="SWIFT/BIC"
                                    placeholderTextColor={'grey'}
                                    secureTextEntry={false}
                                />
                            </View>

                            <View style={styles.w20}>
                                {/* <Image source={eye} style={styles.formImages} /> */}
                            </View>
                        </View>
                        <Divider styles={{marginBottom:10}}/>

                        <View style={styles.flexRow}>
                            <View style={styles.w80}>
                                <TextInput
                                    style={{height: 40,color:"black"}}
                                    placeholder="IBAN"
                                    placeholderTextColor={'grey'}
                                    secureTextEntry={false}
                                />
                            </View>

                            <View style={styles.w20}>
                                {/* <Image source={eye} style={styles.formImages} /> */}
                            </View>
                        </View>
                        <Divider styles={{marginBottom:10}}/>

                        <View style={styles.flexRow}>
                            <View style={styles.w80}>
                                <TextInput
                                    style={{height: 40,color:"black"}}
                                    placeholder="Account Holder Name"
                                    placeholderTextColor={'grey'}
                                    secureTextEntry={false}
                                />
                            </View>

                            <View style={styles.w20}>
                                {/* <Image source={eye} style={styles.formImages} /> */}
                            </View>
                        </View>
                        <Divider styles={{marginBottom:10}}/>

                        <View style={styles.flexRow}>
                            <View style={styles.w80}>
                                <TextInput
                                    style={{height: 40,color:"black"}}
                                    placeholder="Bank Account Number"
                                    placeholderTextColor={'grey'}
                                    secureTextEntry={false}
                                />
                            </View>

                            <View style={styles.w20}>
                                {/* <Image source={eye} style={styles.formImages} /> */}
                            </View>
                        </View>
                        <Divider styles={{marginBottom:10}}/>

                        <View style={styles.flexRow}>
                            <View style={styles.w80}>
                                <TextInput
                                    style={{height: 40,color:"black"}}
                                    placeholder="Address"
                                    placeholderTextColor={'grey'}
                                    secureTextEntry={false}
                                />
                            </View>

                            <View style={styles.w20}>
                                {/* <Image source={eye} style={styles.formImages} /> */}
                            </View>
                        </View>
                        <Divider styles={{marginBottom:10}}/>

                        <Button 
                            onPress={onClose}
                            text={"Done"} 
                            style={{marginTop:50}}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

export default EditBankAccountFormModal;


const styles = StyleSheet.create({
    container:{
        padding:20, 
        backgroundColor:"#fff", 
        minHeight:SHeight
    },
    flexRow:{
        flexDirection:'row'
    },
    w80:{
        width:"80%", justifyContent:'center',paddingLeft:10
    },
    w20:{
        width:"20%", justifyContent:'center',
    },
    formImages:{
        height:15, width:15, alignSelf:'center',resizeMode:'contain'
    },
    rememberText:{
        width:"40%", fontSize:12, textAlign:"left",fontFamily:"Roboto-Regular", alignSelf:"center" 
    },
    forgotText:{
        width:"40%", fontSize:12,textAlign:"right",fontFamily:"Roboto-Regular",alignSelf:"center", 
        color:RedColor,textDecorationLine: 'underline'
    }
})