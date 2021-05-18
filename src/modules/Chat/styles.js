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
    },
    profilePicContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    profilePic:{
        width:50,
        height:50,
        borderRadius:50,
        overflow:'hidden',
        backgroundColor:'red',
        marginHorizontal:10,
    },
    username:{
        color:"white",
        fontFamily:"Roboto-Medium",
        fontSize:18,
    },
    usernameStatus:{
        color:"white",
        fontFamily:"Roboto-Medium",
        fontSize:12,
    },
    messageContainer:{
        backgroundColor:'#F5F5F5',
        padding:5,
        width:'80%',
        borderRadius:10,
        marginBottom:20
    },
    message: {
        color:'#000000',
    },
    messageTime: {
        color:'#6A6A6A',
        textAlign:'right',
        margin:10
    },
    inputParentContainer:{
        width:'100%',
        height:100,
        backgroundColor:'#fff',
        padding:20
    },
    inputContainer: {
        borderColor:'#A7A7A7',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        overflow:'hidden',
        paddingHorizontal:5
    },
    input: {
        height:50,
        flex:1
    },
    inputImages: {
        height:20,
        width:20,
        marginHorizontal:10
    }
})