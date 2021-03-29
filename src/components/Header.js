import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {burger_icon,home_icon,white_back_icon} from '../assets/images/Images'
const SWidth = Dimensions.get('window').width

const Header = ({title, showWhiteBackIcon, navigation})=>{
    
    return(
        <View style={styles.container}>
            <View style={{width:"20%", }}>
                <TouchableOpacity onPress={()=> showWhiteBackIcon ? navigation.goBack() : console.log("open drawerr") }>
                    <Image source={showWhiteBackIcon ? white_back_icon :burger_icon} style={styles.icons}/>
                </TouchableOpacity>
            </View>

            <View style={{width:"60%", }}>
                <Text style={styles.headerTile}>{title}</Text>
            </View>

            <View style={{width:"20%", }}>
                <TouchableOpacity>
                    <Image source={showWhiteBackIcon? null:home_icon} style={styles.icons}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        width:SWidth,
        paddingTop:15,
        paddingBottom:15,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#834191"
    },
    icons:{
        resizeMode:'contain', 
        height:24, 
        width:24, 
        alignSelf:'center'
    },
    headerTile:{
        color:"white",
        fontFamily:"Roboto-Medium",
        fontSize:22,
    }
})