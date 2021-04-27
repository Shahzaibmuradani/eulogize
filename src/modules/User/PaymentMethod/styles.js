import { StyleSheet, Dimensions} from 'react-native';
import {HeadingMedium, SHeight} from '../../../utils/Constants';

export default StyleSheet.create({
    container:{
        padding:10, 
        backgroundColor:"#fff", 
        minHeight:SHeight
    },
    card: {
        width:'100%',
        backgroundColor:"#fff", 
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.38,
        shadowRadius: 5.00,
        elevation: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20
    },
    cardlogo: {
        width:30,
        height:10
    },
    nameAndNumberContainer: {

    },
    name: {
        fontWeight:'bold'
    },
    number: {
        fontWeight:'bold',
        fontSize:10,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    },
    status: {
        fontSize:10,
        textAlign:'right',
        color:'#575757'
    },
    date: {
        fontSize:10,
        textAlign:'right',
        color:'#575757'
    },
    addCardContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:10
    },
    addCardText: {
        color:'#2C2C2C',
        fontWeight:'bold'
    },
    addCardIcon: {
        height:15,
        width:15
    },
    amountText: {
        fontSize:17,
        paddingHorizontal:30,
        fontWeight:'bold'
    },
    inputContainer: {
        width:'100%',
        paddingHorizontal:30,
        marginBottom:40
    }
})