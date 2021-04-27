import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight, RedColor} from '../../utils/Constants';

export default StyleSheet.create({
    container:{
        padding:60, 
        backgroundColor:"#fff", 
        minHeight:SHeight
    },
    flexRow:{
        flexDirection:'row'
    },
    w80:{
        width:"80%", justifyContent:'center',paddingLeft:10
    },
    w20:{
        width:"20%", justifyContent:'center',
    },
    formImages:{
        height:15, width:15, alignSelf:'center',resizeMode:'contain'
    },
    rememberText:{
        width:"40%", fontSize:12, textAlign:"left",fontFamily:"Roboto-Regular", alignSelf:"center" 
    },
    forgotText:{
        width:"40%", fontSize:12,textAlign:"right",fontFamily:"Roboto-Regular",alignSelf:"center", 
        color:RedColor,textDecorationLine: 'underline'
    }
})