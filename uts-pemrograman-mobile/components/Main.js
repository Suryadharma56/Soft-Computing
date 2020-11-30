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
  ScrollView,
  ImageBackground
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import subjectData from '../assets/data/subjectData'
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

export default Main = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('MyProfile')}>
        <View style={styles.subjectContainer}>
          <Image
            source={item.image}
          />
          <Text style={{marginTop: 5}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'lightgrey'}}>
    
      <View style={styles.header}>
       <Image style={styles.user} source={require('../assets/images/main/profilakun.png')}
         />
       <View style={{paddingHorizontal: 50}}>
       <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('MyProfile')}>
       <Text style={styles.profilesettings}>Profile Settings</Text></TouchableOpacity>
       </View>
       
      </View>
<View style={{marginTop: 30 ,width: 318, height: 400,}}><Text style={styles.air}>Start-Up</Text>
      <Image source={require('../assets/images/main/Startup.png')}
       style={{width: 300, height: 200}}
 />
      <Text>
      Play Video - Resume
      </Text>
 </View>
      <View style={{paddingHorizontal: 80}}>
      <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.about}><Text style={styles.abouttext}>About</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 50
  },
  user:{
    width: 100,
    height: 100,
  },
  profile:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  profilesettings:{
    color: "white",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  about:{
    backgroundColor: "blue",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  abouttext:{
    color: "white",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  air:{
    fontFamily: "Georgia",
    fontSize: 28,
    fontWeight: "bold"
  },
  header:{
    alignItems: "center",
    flexDirection: "row",

  },
  addressButton: {
    marginTop: 30
  },
  searchConainer: {
    marginTop: 20
  },
  addressContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subjectHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listContainer: {
    marginTop: 20
  },
  subjectContainer: {
    marginRight: 30,
    justifyContent:'center',
    textAlign: 'center',
    alignItems: 'center'
  }, 
  dealContainer: {
    marginTop: 20
  },
  dealWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footer: {
    zIndex: 2,
    backgroundColor: colors.creamBlue,
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navItem: {
    marginRight: 25,
    marginLeft: 25
  },
  circleIcon: {
    position: 'absolute',
    top: 560,
    left: 160,
    zIndex: 3
  },
  shoppingLogo: {
    marginLeft: 15,
    marginTop: -50,
  }
});