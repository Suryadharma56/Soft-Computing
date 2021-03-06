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
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import colors from '../assets/colors/colors';

export default SignIn = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  });

  const [email, onChangeEmail] = React.useState('');

  const [password, onChangePassword] = React.useState('');

  return (
    <View>
      <View style={styles.circleWrapper}>
      <Image
      style={{width: 300, height: 80, resizeMode: "contain"}}
      source={{uri:"https://www.name-doctor.com/nomi.png/34179.png"}}
      />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{"Selamat Datang!"}</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.emailWrapper}>
          <Text style={styles.emailText}>E-mail</Text>
          <View style={styles.emailInputWrapper}>
            <TextInput
              style={styles.emailInput}
              onChangeText={(text) => onChangeEmail(text)}
              value={email}
            />
          </View>
        </View>
        <View style={styles.passwordWrapper}>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.passwordInputWrapper}>
            <TextInput
              style={styles.passwordInput}
              onChangeText={(text) => onChangePassword(text)}
              value={password}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Text style={styles.textButton}>LOGIN</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.footerWrapper}>
        <Text style={styles.firstText}>
          {"Sudah punya akun?"}
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.secondText}>
            {"   Sign Up"}
             </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 65,
    height: 65,
    position: 'absolute',
    left: 15,
    top: 15,
  },
  whiteCircle: {
    backgroundColor: colors.white,
    marginTop: -65,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  titleWrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.background,
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: 20,
    letterSpacing: 0.4,
    fontFamily: 'Poppins',
    color: colors.black,
    fontSize: 16,
  },
  formWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  emailIcon: {
    position: 'absolute',
  },
  emailText: {
    fontFamily: 'Poppins',
    marginBottom: 10,
    color: colors.grey
  },
  emailInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  passwordIcon: {
    position: 'absolute',
  },
  passwordText: {
    fontFamily: 'Poppins',
    marginBottom: 10,
    color: colors.grey,
    marginTop: 10
  },
  passwordInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 30
  },
  button: {
    backgroundColor: "darkblue",
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 40
  },
  textButton: {
    color: colors.white,
    fontFamily: 'Poppins',
    fontSize: 16
  },
  footerWrapper: {
    alignItems: 'center',
    marginTop: 20
  },
  firstText: {
    fontFamily: 'Poppins',
    paddingRight: 10
  },
  secondText: {
    color: colors.background
  }
});