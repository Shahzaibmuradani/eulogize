import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, VirtualizedList } from 'react-native';
import {SWidth, StatusBarColor, RedColor, fontWhite, } from '../utils/Constants'
import Button from '../components/SolidButton'
import {share_btn, message_icon} from '../assets/images/Images'
import ModalComponent from '../components/Modal'



export default ({data, index, navigation, requestFuneral, myRequest})=>{
    
    
    const [visibility, setVisibility] = React.useState(false)

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

                <View style={styles.w30}>
                    <Text style={styles.time}>{data.time}</Text>
                    <Text style={styles.date}>Exp - {data.expiry_date}</Text>
                </View>
            </View>
            <View style={[styles.w80,{alignSelf:'flex-end'}]}>
                <Text numberOfLines={2} style={styles.desc}>{data.details}</Text>
            </View>

            {
                requestFuneral &&
                <View style={styles.child2}>
                    <View style={[styles.w20,styles.justifyCenter]}>
                        <TouchableOpacity style={styles.imagebox} onPress={()=>setVisibility(!visibility)}>
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
                    <View style={[styles.w20, ]}>
                        <TouchableOpacity style={styles.imagebox}>
                            <Image source ={message_icon} style={styles.share_btn}/>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.w80, {flexDirection:'row'}]}>
                        <View style={styles.w20}>
                            <TouchableOpacity style={styles.imagebox2}>
                                <Image source ={share_btn} style={styles.share_btn}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.w40}>
                            <Text>{data.service} {data.amount}</Text>
                        </View>

                        <View style={styles.w40}>
                            <Image source ={share_btn} style={styles.share_btn}/>
                        </View>
                    </View>
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
            height: 5,
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
    w80:{
        width:"80%",
    }, 
    justifyCenter:{
        justifyContent:'center'
    },
    imagebox:{
        backgroundColor:"#FFFFFF",
        padding:10,
        borderRadius:5,
    },
    imagebox2:{
        backgroundColor:"#FFFFFF",
        padding:10,
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
    }
    
})