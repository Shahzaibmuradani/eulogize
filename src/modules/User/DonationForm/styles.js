import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight} from '../../../utils/Constants';
export default StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor:"#FFFFFF" 
    },
    childContainer:{
        padding: 50,
    },
    heading: {
        textAlign:'center',
        marginBottom:30,
        fontSize:HeadingMedium,
        fontWeight:'600'
    },
    listSection:{
        width:"100%"
        ,backgroundColor:"#F8F8F8" 
    }
})