import React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import {PlatformOS} from '../../utils/Constants';

const PrivacyPolicy =  ({navigation})=>{
     return(
         <SafeAreaView style={styles.container}>
             <Header
                PlatformOS={PlatformOS}
                backIcon={PlatformOS == "ios"}
                onLeftIconPress={()=>{}}
                searchBar={false}
                title="PRIVACY POLICY"
                navigation={navigation}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={{textAlign:'center'}}>
                        Rakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for content
                        Rakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for contentRakuten Viki is an American video streaming website headquartered in San Mateo, California. The company also has offices in Singapore, Tokyo, Japan, and Seoul, South Korea. The name Viki is a play on the words video and Wiki, drawing on the latter companies' use of volunteers for content
                    </Text>
                </View>
            </ScrollView>
         </SafeAreaView>
     )
}

export default PrivacyPolicy;