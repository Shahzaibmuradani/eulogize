import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import {card_logo, plus_icon, add_amount_doller} from '../../../assets/images/Images'
import styles from './styles';
import Header from '../../../components/Header';
import {PlatformOS, StatusBarColor} from '../../../utils/Constants';
import RadioButton from '../../../components/radioButton'
import Divider from '../../../components/Divider'
import Button from '../../../components/SolidButton'


const Payment = ({navigation}) => {
    const [checked, setChecked] = useState(1);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:StatusBarColor}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    PlatformOS={PlatformOS}
                    backIcon={PlatformOS == "ios"}
                    onLeftIconPress={()=>{}}
                    searchBar={false}
                    title="PAYMENT"
                    navigation={navigation}
                />
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <RadioButton containerStyle={{marginRight:10}} status={checked == 1 ? "checked" : "unchecked"} onPress={()=>setChecked(1)}/>
                            <Image style={styles.cardlogo} source={card_logo}/>
                        </View>

                        <View style={styles.nameAndNumberContainer}>
                            <Text style={styles.name}>Johnnie Hudson</Text>
                            <Text style={styles.number}>
                                <Text style={{color:'#0463B3'}}>**** **** **** </Text>
                                5628
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.status}>EXP</Text>
                            <Text style={styles.date}>08/2022</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <RadioButton containerStyle={{marginRight:10}} status={checked == 1 ? "checked" : "unchecked"} onPress={()=>setChecked(1)}/>
                            <Image style={styles.cardlogo} source={card_logo}/>
                        </View>

                        <View style={styles.nameAndNumberContainer}>
                            <Text style={styles.name}>Johnnie Hudson</Text>
                            <Text style={styles.number}>
                                <Text style={{color:'#0463B3'}}>**** **** **** </Text>
                                5628
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.status}>EXP</Text>
                            <Text style={styles.date}>08/2022</Text>
                        </View>
                    </View>

                    <View style={styles.addCardContainer}>
                        <Text style={styles.addCardText}>ADD MORE ACCOUNTS</Text>
                        <TouchableOpacity 
                            onPress={()=>navigation.navigate('CardDetail')} 
                            style={{backgroundColor:StatusBarColor, padding:5}}>
                            <Image style={styles.addCardIcon} source={plus_icon}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.amountText}>AMOUNT</Text>
                    <View style={styles.inputContainer}>
                        <View style={{flexDirection:'row'}}>
                            <TextInput
                                style={{color:"black", flex:1}}
                                placeholder="Enter Amount"
                                placeholderTextColor={'grey'}
                                secureTextEntry={true}
                            />
                            <Image style={{width:30, height:30}} source={add_amount_doller}/>
                        </View>
                        <Divider/>
                    </View>
                    <Button
                        style={{width:100}}
                        text={"PROCEED"} 
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Payment;