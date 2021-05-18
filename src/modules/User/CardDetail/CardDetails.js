import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import {PlatformOS, StatusBarColor} from '../../../utils/Constants';
import Divider from '../../../components/Divider'
import Button from '../../../components/SolidButton'


const Payment = ({navigation}) => {
    const [checked, setChecked] = useState(1);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:StatusBarColor}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    PlatformOS={PlatformOS}
                    backIcon={true}
                    onLeftIconPress={()=>{}}
                    searchBar={false}
                    title="CARD DETAIL"
                    navigation={navigation}
                />
               <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{color:"black", flex:1, padding:10}}
                            placeholder="Card Holder Name"
                            placeholderTextColor={'grey'}
                            secureTextEntry={true}
                        />
                        <Divider/>
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{color:"black", flex:1, padding:10}}
                            placeholder="Card Number"
                            placeholderTextColor={'grey'}
                            secureTextEntry={true}
                        />
                        <Divider/>
                    </View>

                    <View style={[styles.inputContainer, {justifyContent:'space-between', alignItems:'center', flexDirection:'row'}]}>
                        <View style={{width:'60%'}}>
                            <TextInput
                                style={{color:"black", flex:1, padding:10}}
                                placeholder="Card Number"
                                placeholderTextColor={'grey'}
                                secureTextEntry={true}
                            />
                            <Divider/>
                        </View>
                        <View style={{width:'35%'}}>
                            <TextInput
                                style={{color:"black", flex:1, padding:10}}
                                placeholder="Card Number"
                                placeholderTextColor={'grey'}
                                secureTextEntry={true}
                            />
                            <Divider/>
                        </View>
                    </View>

                    <Button
                        style={{width:100}}
                        text={"ADD CARD"} 
                    />
               </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Payment;