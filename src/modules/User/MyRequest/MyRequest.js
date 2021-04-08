import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, FlatList} from 'react-native';
import {PlatformOS,SHeight} from '../../../utils/Constants';
import {funeral_home_pic} from '../../../assets/images/Images';
import DetailBox from '../../../components/DetailBox'


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
        id:1
  
    },
    {
        imageSource: funeral_home_pic,
        name: 'Randy Hoffman',
        funeralHome: "ABC Funeral Home", 
        details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
        expiry_date: "Feb 26/2021",
        service: "Open Casket",
        amount: "5000$",
        status: "PENDING",
        id:2
    },
    {
        imageSource: funeral_home_pic,
        name: 'Phillip Boyd',
        funeralHome: "ABC Funeral Home", 
        details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
        expiry_date: "Feb 26/2021",
        service: "Open Casket",
        amount: "5000$",
        status: "DECLINE",
        id:3
    },
    {
        imageSource: funeral_home_pic,
        name: 'Jacob Fox',
        funeralHome: "ABC Funeral Home", 
        details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
        expiry_date: "Feb 26/2021",
        service: "Open Casket",
        amount: "5000$",
        status: "DECLINE",
        id:4
    },
    
    
  ];
const MyRequest = ({navigation}) => {
    const renderItem =({item, index}) => (
      
        <View>
            
            <DetailBox data={item} index={index} navigation={navigation} myRequest/>
        </View>
    );

    const [dataSource, setDataSource] = useState(DATA);

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor:"#FFFFFF" }}>
            {PlatformOS == "android" &&<Header/>}

            <View  style={{flex:1,backgroundColor:'#fff',minHeight:SHeight}}>
            <FlatList
              contentContainerStyle={{ paddingBottom: SHeight/4 }}
              data={dataSource}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />

          </View>
        </SafeAreaView>
    )
}

export default MyRequest;