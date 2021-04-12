import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, VirtualizedList } from 'react-native';
import {SWidth, StatusBarColor, RedColor, fontWhite, YellowColor,PurpleColor} from '../utils/Constants'
import Button from '../components/SolidButton'
import {share_btn, message_icon} from '../assets/images/Images'
import ModalComponent from '../components/Modal';
import { ProgressBar, Colors } from 'react-native-paper';


export default ({data, index, requestFuneral, myRequest, progressBar, isDetail, detailPrice})=>{
    const [visibility, setVisibility] = React.useState(false)
    console.log(data, ' asdasdasdsad')

    return(
        <View style={styles.container}>
             <ModalComponent 
                text1={"Share"}
                socialShare
                visibility={visibility} 
                onPress={()=>{setVisibility(!visibility)}}/>


            <View style={styles.child1}>
                <View style={styles.w20}>
                    <Image source ={data.imageSource} style={styles.funeral_home_image}/>
                </View>
                
                <View style={styles.w50}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.funeral_home_name}>{data.funeralHome}</Text>
                </View>
                {!progressBar && !isDetail && (
                    data.time && data.expiry_date ?
                    <View style={styles.w30}>
                        <Text style={styles.time}>{data.time}</Text>
                        <Text style={styles.date}>Exp - {data.expiry_date}</Text>
                    </View> 
                    :
                    <View style={styles.w30}>
                        <Text style={styles.time}>{data.expiry_date}</Text>
                    </View> )
                }
                <View style={styles.w30}>
                    {isDetail && <Text style={styles.date}>Exp - {data.expiry_date}</Text>}
                </View>
                
            </View>
            <View style={[styles.w80,{alignSelf:'flex-end'}]}>
                <Text numberOfLines={2} style={styles.desc}>{data.details}</Text>
            </View>

            {
                requestFuneral &&
                <View style={styles.child2}>
                    <View style={[styles.w20,styles.justifyCenter]}>
                        <TouchableOpacity style={styles.imagebox} onPress={()=>{setVisibility(!visibility)}}>
                            <Image source={share_btn} style={styles.share_img}/>
                        </TouchableOpacity>
                    </View>
                
                    <View style={[styles.w40, styles.justifyCenter]}>
                        <Text> Raise {data.amount_raised} / {data.total_amount}</Text>
                    </View>

                    <View style={[styles.w40, {paddingRight:10, justifyContent:'center'}]}>
                    <Button
                        onPress={()=>{console.log("submit")}}
                        textStyle={styles.btnText}
                        text={"DONATION"} 
                        style={styles.btn}/>
                    </View>
                </View>
            }
            {
                myRequest && 
                <View style={{flexDirection:'row', paddingBottom:10, paddingTop:10}}>
                    {!progressBar  ? <>
                        <View style={[styles.w20, ]}>
                            {!isDetail && <TouchableOpacity style={styles.imagebox}>
                                <Image source ={message_icon} style={styles.share_btn}/>
                            </TouchableOpacity>}
                        </View>

                        <View style={[styles.w80, {flexDirection:'row'}]}>
                            {!isDetail&&  <View style={{width:"10%"}}>
                                <TouchableOpacity style={styles.imagebox2} onPress={()=>setVisibility(!visibility)}>
                                    <Image source ={share_btn} style={styles.share_btn}/>
                                </TouchableOpacity>
                            </View>}

                            <View style={{justifyContent:isDetail ? 'space-between' : 'center', flexDirection:'row', width:isDetail ?'100%' : '50%', alignItems:'center'}}>
                                {!isDetail ? <Text style={styles.serviceText}>{data.service} {data.amount}</Text>
                                :
                                <Text style={{fontWeight:'bold'}}>{`$${detailPrice}`}</Text>}
                                 {isDetail && <View style={{flexDirection:'row', paddingRight:20}}>
                                    <Text style={[styles.time, {marginRight:10, fontWeight:'bold'}]}>{data.expiry_date}</Text>
                                    <Text style={[styles.time,{fontWeight:'bold'}]}>{data.time}</Text>
                                 </View>}
                            </View>

                            {!isDetail && <View style={[styles.w40, {justifyContent:'center', alignItems:'center',}]}>
                                {
                                    data.status ===  "ACCEPTED" ?
                                        <Text style={styles.acceptedText}>ACCEPTED</Text>
                                    :
                                    data.status === "DECLINE" ?
                                        <Text style={styles.declineText}>DECLINE</Text>
                                    :
                                        <Text style={styles.pendingText}>PENDING</Text>
                                }
                            </View>}
                        </View>
                    </>: 
                    <>
                        <View style={{width:'100%', alignItems:'flex-end'}}>
                            <View style={[styles.w20, {alignItems:'flex-end', paddingRight:10}]}>
                                <Text style={styles.progressBarText}>{data.requiredProgress}</Text>
                            </View>
                            <View style={styles.progressBarSubContainer}>
                                <View style={styles.w20}/>
                                <View style={[styles.w80, {paddingRight:10}]}>
                                    <ProgressBar progress={data.progress} color={"#F8B634"} />
                                </View>
                            </View>
                            <View style={[styles.w80, {alignItems:'flex-end', paddingRight:10, flexDirection:'row', justifyContent:'flex-end'}]}>
                                <Text style={[styles.time, {marginRight:10, fontWeight:'bold'}]}>{data.expiry_date}</Text>
                                <Text style={[styles.time,{fontWeight:'bold'}]}>{data.time}</Text>
                            </View>
                        </View>
                    </>
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:SWidth * (9.5/10),
        backgroundColor:"#F5F5F5",
        marginBottom:10,
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.38,
        shadowRadius: 5.00,

        elevation: 1,
    },
    child1:{
        flexDirection:'row', 
        paddingTop:10
    },
    child2:{
        flexDirection:'row', 
        paddingTop:10,
        paddingBottom:10
    },
    funeral_home_image:{
        height: 50, 
        width : 50,
        resizeMode:'contain', 
        borderRadius:50
    },
    name:{
        fontFamily:"Roboto-Medium", 
        fontSize:18
    },
    funeral_home_name:{
        fontFamily:"Roboto-Medium", 
        fontSize:14
    }, 
    time:{
        fontFamily:"Roboto-Light", 
        fontSize:14,
        color:"#6A6A6A"
    },
    date:{
        fontFamily:"Roboto-Medium",
        color:StatusBarColor
    },
    desc:{
       paddingRight:20
    },
    w20:{
        width:"20%",
        alignItems:'center'
    },
    w30:{
        width:"30%",
        alignItems:'flex-end', 
        paddingRight:10
    },
    w50:{
        width:"50%",
    },
    w40:{
        width:"40%",
    },
    w60:{
        width:"60%"
    },
    w80:{
        width:"80%",
    }, 
    justifyCenter:{
        justifyContent:'center'
    },
    imagebox:{
        backgroundColor:"#FFFFFF",
        padding:8,
        borderRadius:5,
    },
    imagebox2:{
        backgroundColor:"#FFFFFF",
        padding:8,
        borderRadius:5,
        alignSelf:'flex-start'
    },
    share_img:{
        height:15, 
        width:15, 
        resizeMode:'contain'
    },
    btn:{
        width:'95%', 
        height:30, 
        alignSelf:'flex-end'
    },
    btnText:{
        color:fontWhite,  
        fontFamily:"Roboto-Medium",
        fontSize:10,
    },
    share_btn:{
        height:20,
        width:20, 
        resizeMode:'contain'
    },
    acceptedText:{
        fontFamily:"Roboto-Bold",
        fontSize:14, 
        color:RedColor
    },
    declineText:{
        fontFamily:"Roboto-Bold",
        fontSize:14,
        color:PurpleColor
    },
    pendingText:{
        fontFamily:"Roboto-Bold",
        fontSize:14,
        color:YellowColor
    },
    serviceText:{
        fontFamily:"Roboto-Regular"
    },
    progressBarText: {
        fontSize:10,
        fontWeight:'bold',
        marginBottom:5
    },
    progressBarSubContainer: {
        width:'100%',
        alignSelf:'center',
        flexDirection:'row',
        marginBottom:5
    }
    
})