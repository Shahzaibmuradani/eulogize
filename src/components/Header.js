import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {burger_icon, home_icon,white_back_icon, search, calander} from '../assets/images/Images'

const Header = ({
    title,
    backIcon,
    navigation,
    PlatformOS,
    onLeftIconPress,
    onRightIconPress,
    searchBar,
    onSearch,
    RightComonent,
})=>{
    
    return(
        <View style={styles.container}>
            <View style={[styles.navContainer, {marginBottom:searchBar ? 20 : 0}]}>
                <View style={{marginRight: PlatformOS == "android" ? 20 : 0 }}>
                    <TouchableOpacity onPress={()=> backIcon ? navigation.goBack() : console.log("open drawerr") }>
                        <Image source={backIcon ? white_back_icon :burger_icon} style={styles.icons}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                    <Text style={[styles.headerTile, {textAlign:PlatformOS == "ios" ? 'center' : 'left'}]}>{title}</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        {PlatformOS == "ios" ? null : RightComonent ? <RightComonent/> : <Image source={backIcon? null:home_icon} style={styles.icons}/>}
                    </TouchableOpacity>
                </View>
            </View>
            {searchBar && <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
                <View style={styles.searchContainer}>
                    <TextInput 
                        autoCorrect={false}
                        autoCapitalize={false}
                        placeholder="search..."
                        style={{flex:1}}
                        onChangeText={onSearch} />
                    <Image source={search} style={styles.icons}/>
                </View>
                <TouchableOpacity onPress={onRightIconPress}>
                    <Image source={calander} style={styles.calanderIcon}/>
                </TouchableOpacity>
            </View>}
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    navContainer: {
        justifyContent:'space-between',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    icons:{
        resizeMode:'contain', 
        height:24, 
        width:24, 
        alignSelf:'center'
    },
    calanderIcon: {
        resizeMode:'contain', 
        height:30, 
        width:30, 
        alignSelf:'center'
    },
    headerTile:{
        color:"white",
        fontFamily:"Roboto-Medium",
        fontSize:22,
    },
    searchContainer: {
        height:30,
        backgroundColor:'#fff',
        borderRadius:10,
        padding:10,
        flexDirection:'row',
        flex:1,
        marginRight:10
    }
})