import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight, StatusBarColor} from '../../../utils/Constants';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:StatusBarColor,
    },
    ammountContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    heading: {
        color:'#585858',
        fontWeight:'bold'
    },
    input: {
        width:'100%',
        marginBottom:10
    },
    imagesContainer: {
        flexWrap:'wrap',
        flexDirection:'row',
        width:'100%',
        marginBottom:20
    },
    image: {
        width:50,
        height:50,
        marginRight:10,
        marginBottom:10
    }
})