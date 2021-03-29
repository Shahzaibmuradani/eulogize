import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Modal, TextComponent} from 'react-native';
import {burger_icon,home_icon} from '../assets/images/Images'
import Button from '../components/SolidButton'
const SWidth = Dimensions.get('window').width;
const SHeight =  Dimensions.get('window').height;

const ModalComponent = ({text1,text2, visibility, showButton,ButtonText,onPress,ButtonStyle})=>{
    
    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}>

                <View style={styles.modal}>
                    <View style={{backgroundColor: "white", borderRadius: 20,padding: 35, 
                    alignItems: "center",shadowColor: "#000",
                    shadowOffset: {width: 0,height: 2},
                    shadowOpacity: 0.25,
                    shadowRadius: 4,elevation: 5}}>
                        <Text style={styles.text}>{text1}</Text>
                        <Text style={styles.text}>{text2}</Text>
                        {
                            showButton &&
                            <Button text={ButtonText} onPress={onPress} style={ButtonStyle}/>
                        }
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default ModalComponent;

const styles= StyleSheet.create({
    text:{
        fontFamily:"Roboto-Light",
        fontSize:16
    },
    modal:{
        flex: 1,
        alignSelf:'center',
        width:SWidth/1.2,
        marginTop: 
        SHeight/2.5
    }
})