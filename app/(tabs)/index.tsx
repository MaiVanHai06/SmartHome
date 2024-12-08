import { Image, StyleSheet, Platform, View, Text, ImageBackground, TextInput, Button, TouchableOpacity, Alert} from 'react-native';
import React from 'react'
import { useState } from 'react'
import Icon from '@expo/vector-icons/FontAwesome'
// inport {NavigationContainer} from '@react-navigation/native'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// function RegisterScreen() {
//   return(
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//       <Text>REGISTER</Text>
//     </View>
//     )
// }
// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer></NavigationContainer>
//   )
// }
export default function HomeScreen() {
  const image = require('/Users/maivanhai061204dn/Documents/workspace/test-one/hello-you/my-app/assets/images/backgroundHouse.png')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  const handleOnPress = () => {
    // check userName 
    const checkSpace = /\s/;
    const checkAccents = /[[áàảạãâầấẩậăắẳặâ]/i
    if (checkSpace.test(username)) {
      Alert.alert('Username khong duoc chua khoang trắng')
    } else if (checkAccents.test(username)) {
      Alert.alert('Username khong duoc chua dau')
    } else {
      console.log('username', username);
    }
    console.log('password', password);
  }
  // tạo ẩn hiện password
  const [passwordVisible, setPasswordVisible] = useState(false)
  const handlePasswordVisible = () => {
    setPasswordVisible(prevState => !prevState)
  }
  
    return (
      
      <ImageBackground source={image} style = {styles.imageBackground} >
        <View style = {styles.container}>
          <View style = {styles.textContainer}>
            <Text style = {styles.text}>SMART HOME</Text>
          </View>
          <View style = {styles.logoContainer}>
            <Image style = {styles.logo} source={require('/Users/maivanhai061204dn/Documents/workspace/test-one/hello-you/my-app/assets/images/logo-smart-home.png')} />
          </View>
          <View style= {styles.inputContainer}>
            <View>
              <View style={styles.item}>
                <Icon name='user' size={40} style={{marginEnd:10, fontSize: 20, color: 'white'}} />
                <Text style= {styles.inputText}>
                USER NAME
                </Text>
              </View>
              <View style = {styles.textInput}>
                <TextInput style={{flex: 1, color:'white', marginStart: 5}} placeholder='Enter UserName' onChangeText={setUserName} placeholderTextColor = 'rgba(255, 255, 255, 0.5)'  />
              </View>
            </View>
            <View >
              <View style={styles.item}>
                <Icon name='lock' size={40} style={{marginEnd:10, fontSize: 20, color: 'white'}} />
                <Text style= {styles.inputText}>
                PASSWORD
                </Text>
              </View> 
              <View  style = {styles.textInput}> 
                
                <TextInput style={{flex: 1, color:'white', marginStart: 5}} placeholder='Enter PassWord' onChangeText={setPassword} placeholderTextColor = 'rgba(255, 255, 255, 0.5)' secureTextEntry={!passwordVisible}  />
                <TouchableOpacity onPress={handlePasswordVisible}>
                  {passwordVisible ? (
                      <Icon name='eye' size={20} color={'white'} marginEnd='10' ></Icon>
                    ):(
                      <Icon name='eye-slash' size={20} color={'white'} marginEnd='10' ></Icon>
                    )}
                </TouchableOpacity>

              </View>
            </View>
          </View>
          <View style = {styles.buttonContainer}>
            <Button color = 'white' title='Login' onPress={handleOnPress}/>
          </View>
        </View>  
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
    
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Arial',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  textContainer: {
    flex: 0.5,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  logoContainer: {
    flex: 2,
    marginBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,

  },
  item:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  inputText: {
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    marginTop: 5,
    paddingStart: 5,
    fontSize: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  buttonContainer: {
    flex: 0.35,
    borderColor: 'gray',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 90,
    borderRadius: 10
  },
});
