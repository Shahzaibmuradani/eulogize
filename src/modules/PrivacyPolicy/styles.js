import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight, StatusBarColor} from '../../utils/Constants';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:StatusBarColor,
    },
    contentContainer: {
        padding:10,
        minHeight:SHeight,
        backgroundColor:'#fff'
    },
    heading: {
        textAlign:'center',
        marginBottom:30,
        fontSize:HeadingMedium,
        fontWeight:'600'
    }
})