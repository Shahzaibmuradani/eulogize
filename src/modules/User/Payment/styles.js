import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight} from '../../../utils/Constants';

export default StyleSheet.create({
    container:{
        paddingHorizontal:20, 
        backgroundColor:"yellow", 
        minHeight:SHeight
    },
    rows:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        paddingHorizontal:20, 
        paddingVertical:20
    },
    text:{
        fontFamily:"Roboto-Medium", 
        fontSize:16
    },
    notification_image:{
        height:40, width:40, resizeMode:'contain'
    },
    image:{
        height:20, width:20, resizeMode:'contain'
    }
})