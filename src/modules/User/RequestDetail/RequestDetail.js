import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {logo, funeral_home_pic} from '../../../assets/images/Images'
import Divider from '../../../components/Divider'
import styles from './styles'
import {PlatformOS} from '../../../utils/Constants';
import Header from '../../../components/Header';
import DetailBox from '../../../components/DetailBox'
import { ProgressBar } from 'react-native-paper';
import Button from '../../../components/SolidButton'


const RequestDetail = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Header
                PlatformOS={PlatformOS}
                backIcon={PlatformOS == "ios"}
                onLeftIconPress={()=>{}}
                searchBar={false}
                title="REQUEST DETAIL"
                navigation={navigation}
            />
            <ScrollView style={{padding:20, backgroundColor:'#fff'}}>

                <DetailBox disableBottomManu data={{ 
                    imageSource: funeral_home_pic,
                    name: 'Johnnie Hudson',
                    funeralHome: "ABC Funeral Home", 
                    details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
                    time: "10:14 AM",
                    expiry_date: "Feb-30",
                    service: "Open Casket",
                    amount: "5000$",
                    status: "ACCEPTED",
                    id:1,
                    progress:0.5,
                    requiredProgress:"60%/100%"
                }} index={1} navigation={navigation} myRequest/>

                <View style={styles.ammountContainer}>
                    <Text style={styles.heading}>Remaning amount</Text>
                    <Text style={styles.heading}>$2000/$6000</Text>
                </View>
                <ProgressBar style={{marginBottom:10}} progress={1} color={"#F8B634"} />

                <Text style={[styles.heading, {marginBottom:10}]}>Relation</Text>
                <TextInput
                    editable={false}
                    placeholder="Relation with requested person" 
                    onChangeText={()=>{}} 
                    style={styles.input} />
                <Divider styles={{marginBottom:10}}/>

                <Text style={[styles.heading, {marginBottom:10}]}>Address</Text>
                <TextInput
                    editable={false}
                    placeholder="4794 Duff Avenue SMITHFIELD, NE. Nebraska 68976" 
                    onChangeText={()=>{}} 
                    style={styles.input} />
                <Divider styles={{marginBottom:10}}/>

                <Text style={[styles.heading, {marginBottom:10}]}>Service</Text>
                <View style={{width:'100%', flexDirection:'row'}}>
                <TextInput
                    editable={false}
                    placeholder="Burial" 
                    onChangeText={()=>{}} 
                    style={[styles.input, {width:"50%"}]} />

                <TextInput
                    editable={false}
                    placeholder="$6000" 
                    onChangeText={()=>{}} 
                    style={[styles.input, {width:"50%"}]} />
                </View>
                <Divider styles={{marginBottom:10}}/>

                <Text style={[styles.heading, {marginBottom:10}]}>Location</Text>
                <TextInput
                    editable={false}
                    placeholder="4794 Duff Avenue SMITHFIELD, NE. Nebraska 68976" 
                    onChangeText={()=>{}} 
                    style={styles.input} />
                <Divider styles={{marginBottom:10}}/>

                <Text style={[styles.heading, {marginBottom:10}]}>Description</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    editable={false}
                    placeholder="Lorem ipsum dolor sit amet, consetetur sadipsc ing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no" 
                    onChangeText={()=>{}} 
                    style={styles.input} />
                <Divider styles={{marginBottom:10}}/>

                <Text style={[styles.heading, {marginBottom:10}]}>Attachments</Text>

                <View style={styles.imagesContainer}>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                    <Image style={styles.image} source={logo}/>
                </View>
                <Button 
                    onPress={()=>navigation.navigate('Payment')}
                    text={"DONATION"} 
                    style={{marginBottom:40}}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default RequestDetail;