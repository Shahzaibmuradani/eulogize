import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight} from '../../../utils/Constants';

export default StyleSheet.create({
    container:{
        padding:10, 
        backgroundColor:"#fff", 
        minHeight:SHeight
    },
    inputContainer: {
        width:'100%',
        paddingHorizontal:30,
        marginBottom:40,
    },
    inputParentContainer: {
        flexDirection:'row'
    }
})