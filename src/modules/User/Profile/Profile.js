import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground,  ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import {
  PlatformOS,
  StatusBarColor,
} from '../../../utils/Constants';
import Header from '../../../components/Header';
import styles from './styles';
import {eye, edit_icon} from '../../../assets/images/Images';
import Divider from '../../../components/Divider'
import ImagePicker from '../../../utils/ImagePicker';

const Profile = ({navigation}) => {
    const [showCalander, setShowCalander] = useState(false)
    const [isEditable, setIsEditable] = useState(false)

    const [avatar, setAvatar] = useState({uri:""})
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        <Header
          PlatformOS={PlatformOS}
          backIcon={true}
          onLeftIconPress={()=>{}}
          onRightIconPress={()=>{setShowCalander(true)}}
          searchBar={false}
          onSearch={(x)=>{}}
          RightComonent={()=> 
          <TouchableOpacity onPress={()=>{
              console.log("dsada")
              setIsEditable(true)
          }}>
              <Text style={{color:'#fff',textAlign:'center'}}>{isEditable ? "Save" : "Edit"}</Text>
          </TouchableOpacity>}
          title="PROFILE"
          navigation={navigation}
        />
        <View style={[styles.profileImageContainer, {backgroundColor:StatusBarColor}]}>
          <View style={styles.profilePic}>
                <Image
                    style={styles.pic}
                    source={{
                        uri:avatar.uri ? avatar.uri : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
                    }}>
                </Image>
                <TouchableOpacity onPress={()=>{
                    ImagePicker((x)=>{
                        if(x){
                            setAvatar(x)
                        }
                    })
                }} style={styles.avatarEditIcon}>
                    <Image style={{width:20, height:20}} source={edit_icon}/>
                </TouchableOpacity>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                        editable={isEditable}
                        style={{height: 40,color:"black"}}
                        placeholder="First Name"
                        placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                        editable={isEditable}
                        style={{height: 40,color:"black"}}
                        placeholder="Last Name"
                        placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                        editable={isEditable}
                        style={{height: 40,color:"black"}}
                        placeholder="Email"
                        placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>
              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                        editable={isEditable}
                        style={{height: 40,color:"black"}}
                        placeholder="Password"
                        placeholderTextColor={'grey'}
                        secureTextEntry={true}
                      />
                  </View>
                  <View style={styles.w20}>
                      <Image source={eye} style={styles.formImages} />
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                        editable={isEditable}
                        style={{height: 40,color:"black"}}
                        placeholder="Confirm Password"
                        placeholderTextColor={'grey'}
                        secureTextEntry={true}
                      />
                  </View>
                  <View style={styles.w20}>
                      <Image source={eye} style={styles.formImages} />
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <View style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                        editable={isEditable}
                        style={{height: 40,color:"black"}}
                        placeholder="Bank Account Information (optional)"
                        placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
  
export default Profile;