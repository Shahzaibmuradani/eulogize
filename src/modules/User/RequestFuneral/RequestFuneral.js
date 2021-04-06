import React, {useEffect, useState} from 'react';
import {SafeAreaView,View, FlatList, Image} from 'react-native';
import {
  PlatformOS,
  SHeight
} from '../../../utils/Constants';
import {funeral_home_pic} from '../../../assets/images/Images'
import Header from '../../../components/Header';
import DetailBox from '../../../components/DetailBox'
import styles from './styles';

const DATA = [
  { 
      imageSource: funeral_home_pic,
      name: 'Johnnie Hudson',
      funeralHome: "ABC Funeral Home", 
      details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
      time: "10:14 AM",
      expiry_date : "Feb 20",
      amount_raised:"$3000",
      total_amount:"$5000",
      id:1

  },
  {
      imageSource: funeral_home_pic,
      name: 'Randy Hoffman',
      funeralHome: "ABC Funeral Home", 
      details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
      time: "10:14 AM",
      expiry_date : "Feb 20",
      amount_raised:"$3000",
      total_amount:"$5000",
      id:2
  },
  {
      imageSource: funeral_home_pic,
      name: 'Phillip Boyd',
      funeralHome: "ABC Funeral Home", 
      details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
      time: "10:14 AM",
      expiry_date : "Feb 20",
      amount_raised:"$3000",
      total_amount:"$5000",
      id:3
  },
  {
      imageSource: funeral_home_pic,
      name: 'Jacob Fox',
      funeralHome: "ABC Funeral Home", 
      details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
      time: "10:14 AM",
      expiry_date : "Feb 20",
      amount_raised:"$3000",
      total_amount:"$5000",
      id:4
  },
  {
      imageSource: funeral_home_pic,
      name: 'Timmothy Green',
      funeralHome: "ABC Funeral Home", 
      details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
      time: "10:14 AM",
      expiry_date : "Feb 20",
      amount_raised:"$3000",
      total_amount:"$5000",
      id:5
  },
  {
      imageSource: funeral_home_pic,
      name: 'Ralph Sharp',
      funeralHome: "ABC Funeral Home", 
      details: "Qwerty yabol deafy tru aled inspect js adisciping eli, dearly ... sit adsciping the elite",
      time: "10:14 AM",
      expiry_date : "Feb 20",
      amount_raised:"$3000",
      total_amount:"$5000",
      id:6
  },
  
  
];

const RequestFuneral = ({navigation}) => {
    const renderItem =({item, index}) => (
      
      <View>
          
          <DetailBox data={item} index={index} navigation={navigation} requestFuneral/>
      </View>
  );
const [dataSource, setDataSource] = useState(DATA);

    return (
      //AHSAN BHAI HEADER KA NAAM : "DONATION REQUESTS" RAKHNA"
      <SafeAreaView style={{ flex: 1, backgroundColor:"#FFFFFF" }}>
        {PlatformOS == "android" &&<Header/>}
        
          <View  style={styles.container}>
            <FlatList
              contentContainerStyle={{ paddingBottom: SHeight/4 }}
              data={dataSource}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />

          </View>
       
      </SafeAreaView>
    );
  }
  
  export default RequestFuneral;