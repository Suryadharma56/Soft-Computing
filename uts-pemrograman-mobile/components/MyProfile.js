import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import subjectData from '../assets/data/subjectData'
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

const Myprofile=({navigation})=>{
  return(
    <View>
      <View style={{justifyContent: "space-between", alignItems: "center"}}>
       <Image
          style={{width: 100, height: 100, marginVertical: 16}} source={require('../assets/images/main/profilakun.png')}
        />
          <View>
          <Text style={{borderWidth: 1, borderColor: "black"}}>Ida Bagus Suryadharma Santika</Text>
          <Text style={{borderWidth: 1, borderColor: "black"}}>Gussuryadharma56@gmail.com</Text>
          <Text style={{borderWidth: 1, borderColor: "black"}}>0895410971722</Text>
          <Text style={{borderWidth: 1, borderColor: "black"}}>Asrama Polda Kreneng Blok N no.14</Text>
          </View>
       </View>
    </View>
  )
}

export default Myprofile;
