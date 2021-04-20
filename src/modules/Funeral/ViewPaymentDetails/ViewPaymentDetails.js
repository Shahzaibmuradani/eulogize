import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {PlatformOS, SHeight, StatusBarColor} from '../../../utils/Constants';
import {funeral_home_pic} from '../../../assets/images/Images';
import DetailBox from '../../../components/DetailBox'
import Header from '../../../components/Header';


const DATA = [
{ 
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
    requiredProgress:"60%/100%",
},
{
    imageSource: funeral_home_pic,
    name: 'Randy Hoffman',
    funeralHome: "ABC Funeral Home", 
    details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
    time: "10:14 AM",
    expiry_date: "Feb 26/2021",
    service: "Open Casket",
    amount: "5000$",
    status: "PENDING",
    id:2,
    progress:0.5,
    requiredProgress:"60%/100%"
},
{
    imageSource: funeral_home_pic,
    name: 'Phillip Boyd',
    funeralHome: "ABC Funeral Home", 
    details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
    time: "10:14 AM",
    expiry_date: "Feb 26/2021",
    service: "Open Casket",
    amount: "5000$",
    status: "DECLINE",
    id:3,
    progress:0.5,
    requiredProgress:"60%/100%"
},
{
    imageSource: funeral_home_pic,
    name: 'Jacob Fox',
    funeralHome: "ABC Funeral Home", 
    details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
    time: "10:14 AM",
    expiry_date: "Feb 26/2021",
    service: "Open Casket",
    amount: "5000$",
    status: "DECLINE",
    id:4,
    progress:0.5,
    requiredProgress:"60%/100%"
},


];
const ViewPaymentDetails = ({navigation}) => {
    const [dataSource, setDataSource] = useState(DATA);
    
    const renderItem =({item, index}) => (
        <TouchableOpacity onPress={()=>{
            let temp = [...dataSource].map(res=>{return {...res}})
            temp[index].isOpen = !item.isOpen
            setDataSource(temp)
        }}>
            <DetailBox detailPrice={"200"} progressBar={item.isOpen} isDetail data={item} index={index} navigation={navigation} myRequest/>
        </TouchableOpacity>
    );
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
            <View  style={{flex:1,minHeight:SHeight}}>
                <Header
                    PlatformOS={PlatformOS}
                    backIcon={PlatformOS == "ios"}
                    onLeftIconPress={()=>{}}
                    searchBar={false}
                    title="VIEW PAYMENT DETAILS"
                    navigation={navigation}
                />
                <FlatList
                    contentContainerStyle={{ paddingBottom: SHeight/4, backgroundColor:'#fff', paddingTop:10 }}
                    data={dataSource}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
          </View>
        </SafeAreaView>
    )
}

export default ViewPaymentDetails;