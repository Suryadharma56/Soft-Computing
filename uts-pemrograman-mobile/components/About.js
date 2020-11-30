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

export default About = ({ navigation }) =>{
  return(
    <View style={{alignItems: "flex-start", justifyContent: "center", flex: 1, paddingHorizontal: 16}}>
      <Text style= {{textAlign: "justify", fontFamily: "Georgia", fontSize: 20}}>
      CALLINAN adalah layanan streaming berbasis langganan yang memungkinkan anggota kami menonton acara TV dan film tanpa iklan di perangkat yang terhubung ke Internet. Kamu juga dapat men-download acara TV dan film ke iOS, Android, atau perangkat Windows 10 dan menonton tanpa koneksi Internet.
      </Text>
    </View>
  )
}