import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight} from '../../../utils/Constants';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        minHeight:SHeight * 0.6,
        padding:50
    },
    heading: {
        textAlign:'center',
        marginBottom:30,
        fontSize:HeadingMedium,
        fontWeight:'600'
    },
    profileImageContainer: {
        width:'100%',
        padding:30
    },
    profilePic: {
        width:150,
        height:150,
        borderRadius:200,
        overflow:'hidden'
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
})