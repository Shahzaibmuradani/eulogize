import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View,  ScrollView,Image} from 'react-native';
import Input from '../../../components/Input'
import { RadioButton } from 'react-native-paper';
import {image_placeholder} from '../../../assets/images/Images'
import Button from '../../../components/BorderButton';
import ModalComponent from '../../../components/Modal'
import {
    PlatformOS,
    StatusBarColor,
    RedColor,
    OrangeColor,
    YellowColor,
    fontWhite,
    SHeight
  } from '../../../utils/Constants';
import styles from './styles';

const DonationForm = ({navigation}) => {

    const [name, setName] = useState("")
    const [relation, setRelation] =useState("")
    const [address, setAddress] = useState("")
    const [funeralHome, setFuneralHome] = useState("")
    const [services, setServices] = useState("")
    const [checked, setChecked] = useState('first');
    const [funerallocation, setFuneralLocation] = useState("")
    const [desc, setDesc] = useState("")
    const [attachments, setAttachments] = useState("")
    const [modal, setModal] =useState(false)


    const [servicesToggle, setServicesToggle] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.childContainer}>
           
                <Input placeholder={"Name"} value={name} onChangeText={(x)=> setName(x)}/>
                <Input placeholder={"Relation"} value={relation} onChangeText={(x)=> setRelation(x)}/>
                <Input placeholder={"Address"} value={address} onChangeText={(x)=> setAddress(x)}/>

                <Input  placeholder={"FuneralHome"} value={funeralHome} 
                        onChangeText={(x)=> setFuneralHome(x)} 
                        type={"dropdown"}
                        options = {["1", "2", "3"]}
                />

                <Input placeholder={"Services"} value={services} 
                    onChangeText={(x)=> setServices(x)} 
                    type={"dropdown"}
                    onPress={()=>setServicesToggle(!servicesToggle)}
                />
                { servicesToggle &&
                <View style={styles.listSection}>
                    <View style={{flexDirection:'row',alignItems:'center', paddingHorizontal:10, paddingVertical:10}}>
                        <Text style={{width:"40%"}}>
                            Burial
                        </Text>
                        <View style={{width:"30%", alignItems:'flex-end'}}>
                            <Text>$6000</Text>
                        </View>
                        <View style={{ width:"30%", alignItems:'flex-end'}}>
                            <RadioButton.Android
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                                color={"#834191"}
                            />
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center', paddingHorizontal:10, paddingVertical:10}}>
                        <Text style={{width:"40%"}}>
                            Cremation
                        </Text>
                        <View style={{width:"30%", alignItems:'flex-end'}}>
                            <Text>$5000</Text>
                        </View>
                        <View style={{ width:"30%", alignItems:'flex-end'}}>
                            <RadioButton.Android
                                value="first"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                                color={"#834191"}
                            />
                        </View>
                        
                    </View>
                </View>
                }

                <Input 
                    placeholder={"Funeral Location"} 
                    value={funerallocation} 
                    onChangeText={(x)=> setFuneralLocation(x)} 
                    type={"location"}
                    
                />

                <Input 
                    placeholder={"Description"} 
                    value={desc} 
                    onChangeText={(x)=> setDesc(x)} 
                    
                />

                <Input 
                    placeholder={"Attachment"} 
                    value={attachments} 
                    onChangeText={(x)=> setAttachments(x)} 
                    type={"location"}

                />
                <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-evenly',}}>
                    <Image source={image_placeholder} style={{height:50, width:50, resizeMode:'contain'}}/>
                    <Image source={image_placeholder} style={{height:50, width:50, resizeMode:'contain'}}/>
                    <Image source={image_placeholder} style={{height:50, width:50, resizeMode:'contain'}}/>
                    <Image source={image_placeholder} style={{height:50, width:50, resizeMode:'contain'}}/>

                </View>
                <View style={{paddingTop: 20, paddingBottom:40, }}>
                <Button
                    onPress={()=>{setModal(!modal)}}
                    textStyle={{color:fontWhite, fontWeight:'normal'}}
                    text={"REQUEST FOR DONATION"} 
                    style={{backgroundColor:RedColor, width:'100%', marginBottom:30,}}/>
                </View>
            </ScrollView>
            <ModalComponent 
                text1={"Your request has been submitted "}
                text2={"successfully"}
                visibility={modal} 
                showButton ButtonText={"OK"} ButtonStyle={{marginTop:20, width:"50%"}}
                onPress={()=>{setModal(!modal);}}/>
        </SafeAreaView>
      );
}
export default DonationForm;