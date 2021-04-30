import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, ImageBackground,  ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import {
  PlatformOS,
  StatusBarColor,
} from '../../../utils/Constants';
import Header from '../../../components/Header';
import styles from './styles';
import {eye, edit_icon, dropdown_icon} from '../../../assets/images/Images';
import Divider from '../../../components/Divider'
import ImagePicker from '../../../utils/ImagePicker';
import EditBankAccountFormModal from '../../../components/EditBankAccountFormModal';


const Profile = ({navigation}) => {
    const [showCalander, setShowCalander] = useState(false)
    const [isEditable, setIsEditable] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const [showEditBank, setShowEditBank] = useState(false)



    const [avatar, setAvatar] = useState({uri:""})
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:StatusBarColor }}>
        <EditBankAccountFormModal 
          onClose={()=>setShowEditBank(false)} 
          navigation={navigation} 
          visibility={showEditBank}/>
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
                        placeholder="ABC Funeral Home"
                        placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                  </View>
              </View>
              <Divider styles={{marginBottom:20}}/>

              <TouchableOpacity 
                disabled={!isEditable} 
                onPress={()=>setShowDropDown(!showDropDown)} 
                style={styles.dropdownContainer}>
                <Text style={styles.dropdownText}>Services and Price</Text>
                <Image source={dropdown_icon}/>
              </TouchableOpacity>

              {showDropDown && 
              <View style={styles.dropdownContentContainer}>
                  <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{width:'60%'}}>
                        <TextInput
                          editable={isEditable}
                          style={{height: 40,color:"black"}}
                          placeholder="Burial"
                          placeholderTextColor={'grey'}
                        />
                      <Divider/>
                    </View>
                    <View style={{width:'30%'}}>
                        <TextInput
                          editable={isEditable}
                          style={{height: 40,color:"black"}}
                          placeholder="$5000"
                          placeholderTextColor={'grey'}
                        />
                      <Divider/>
                    </View>
                  </View>

                  <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{width:'60%'}}>
                        <TextInput
                          editable={isEditable}
                          style={{height: 40,color:"black"}}
                          placeholder="Cremation"
                          placeholderTextColor={'grey'}
                        />
                      <Divider/>
                    </View>
                    <View style={{width:'30%'}}>
                        <TextInput
                          editable={isEditable}
                          style={{height: 40,color:"black"}}
                          placeholder="$6000"
                          placeholderTextColor={'grey'}
                        />
                      <Divider/>
                    </View>
                  </View>
              </View>}

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

              <TouchableOpacity onPress={()=>setShowEditBank(true)} style={{flexDirection:'row'}}>
                  <View style={styles.w80}>
                      <TextInput
                        editable={false}
                        style={{height: 40,color:"black"}}
                        placeholder="Bank Account Information (optional)"
                        placeholderTextColor={'grey'}
                      />
                  </View>
                  <View style={styles.w20}>
                  </View>
              </TouchableOpacity>
              <Divider styles={{marginBottom:20}}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
  
export default Profile;