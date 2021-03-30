import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground,  ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import {
  PlatformOS,
  StatusBarColor,
  RedColor,
  OrangeColor,
  YellowColor,
  fontWhite,
  SHeight
} from '../../../utils/Constants';
import Header from '../../../components/Header';
import styles from './styles';
import {background_splash} from '../../../assets/images/Images';
import Card from '../../../components/SubscriptionCards';
import Button from '../../../components/BorderButton';
const FuneralHome = () => {
    const [plans, setPlans] = useState([
      {
        isChecked:true,
        dateInNumber:"03",
        dateType:"MONTH",
        trial:"FREE TRIAL",
        price:"000",
        backgroundColor:RedColor,
        color:fontWhite
      },
      {
        isChecked:false,
        dateInNumber:"06",
        dateType:"MONTH",
        trial:"15 DAYS TRIAL",
        price:"000",
        backgroundColor:OrangeColor,
        color:fontWhite
      },
      {
        isChecked:false,
        dateInNumber:"01",
        dateType:"YEAR",
        trial:"30 DAYS TRIAL",
        price:"000",
        backgroundColor:YellowColor,
        color:'#000'
      }
    ])
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        {PlatformOS == "android" &&<Header/>}
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={background_splash} style={styles.container}>
              <Text style={styles.heading}>SELECT A SUBSCRIPTION PLAN</Text>
              {
                plans.map((res, i)=>{
                  return(
                    <Card
                      backgroundColor={res.backgroundColor}
                      isChecked={res.isChecked}
                      dateInNumber={res.dateInNumber}
                      dateType={res.dateType}
                      trial={res.trial}
                      price={res.price}
                      color={res.color}
                      onPress={(x)=>{
                        let temp = [...plans].map(res=> {return {...res}})
                        temp.map((j,k)=>{
                          if(j.isChecked == plans[i].isChecked){
                            temp[i].isChecked = x
                          }
                          else{
                            temp[k].isChecked = false
                          }
                        })
                        setPlans(temp)
                      }}
                    />
                  )
                })
              }
              <Button
                onPress={()=>{console.log('submit')}}
                textStyle={{color:fontWhite, fontWeight:'normal'}}
                text={"SUBMIT"} 
                style={{backgroundColor:RedColor}}/>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
}
  
export default FuneralHome;