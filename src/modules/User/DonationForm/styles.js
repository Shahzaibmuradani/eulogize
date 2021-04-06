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
    },
    listChild:{
        flexDirection:'row',
        alignItems:'center', 
        paddingHorizontal:10, 
        paddingVertical:10
    },
    w40:{
        width:"40%"
    },
    w30:{
        width:"30%",
        alignItems:"flex-end"
    },
    galleryContainer:{
        paddingTop:20, 
        flexDirection:'row', 
        justifyContent:'space-evenly',
    },
    imageGallery:{
        height:50, width:50, resizeMode:'contain'
    },
    alignJustify:{
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    plus_icon:{
        height:20, width:20, resizeMode:'contain',
    }
})