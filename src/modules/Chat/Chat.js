import React from 'react';
import { View, ScrollView, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import {PlatformOS} from '../../utils/Constants';
import {sendIcon, attachFileIcon} from '../../assets/images/Images';


const Chat = ({navigation})=>{
     return(
         <SafeAreaView style={styles.container}>
             <Header
                PlatformOS={PlatformOS}
                backIcon={true}
                onLeftIconPress={()=>{}}
                searchBar={false}
                CenterComponent={PlatformOS != "ios" ? ()=>(
                    <View style={styles.profilePicContainer}>
                        <View style={styles.profilePic}>
                        
                        </View>
                        <View>
                            <Text style={styles.username}>USERNAME</Text>
                            <Text style={styles.usernameStatus}>online</Text>
                        </View>
                    </View>
                ):false}
                navigation={navigation}
                RightComonent={PlatformOS == "ios" ? ()=>(
                    <View style={styles.profilePicContainer}>
                        <View>
                            <Text style={styles.username}>USERNAME</Text>
                            <Text style={styles.usernameStatus}>online</Text>
                        </View>
                        <View style={styles.profilePic}>
                        
                        </View>
                    </View>
                ):false}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <View style={[styles.messageContainer]}>
                        <Text style={[styles.message]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                        </Text>
                        <Text style={styles.messageTime}>01.00 AM</Text>
                    </View>


                    <View style={[styles.messageContainer, {backgroundColor:'#fff', borderWidth:1, borderColor:'#707070', alignSelf:'flex-end'}]}>
                        <Text style={[styles.message]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                            Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                        </Text>
                        <Text style={styles.messageTime}>01.00 AM</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.inputParentContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Type a message" />
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Image source={attachFileIcon} style={styles.inputImages} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={sendIcon} style={styles.inputImages} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
         </SafeAreaView>
     )
}

export default Chat;