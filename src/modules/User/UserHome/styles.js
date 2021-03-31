import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight} from '../../../utils/Constants';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:50,
        minHeight:SHeight
    },
    heading: {
        textAlign:'center',
        marginBottom:30,
        fontSize:HeadingMedium,
        fontWeight:'600'
    },
    logo:{
        alignSelf:'center',
        height:200,
        width:200,
        resizeMode:'contain',
        marginBottom:50
    },
})