import { Image, StyleSheet, Platform, View, Text, ImageBackground, TextInput, Button, Alert } from 'react-native';
import React from 'react'
import { useState } from 'react'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { red } from 'react-native-reanimated/lib/typescript/Colors';



export default function HomeScreen() {
  const image = { uri: 'https://img.lovepik.com/background/20211029/medium/lovepik-technological-mobile-wallpaper-background-image_400309739.jpg' }
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const handleOnPress = () => {
    console.log('username', username);
    console.log('password', password);
  }
  
    return (
      
      <ImageBackground source={image} style = {styles.imageBackground} >
        <View style = {styles.container}>
          <View style = {styles.textContainer}>
            <Text style = {styles.text}>SMART HOME</Text>
          </View>
          <View style = {styles.logoContainer}>
            <Image style = {styles.logo} source={{uri: 'https://media.istockphoto.com/id/1339031100/vector/art-illustration.jpg?s=612x612&w=is&k=20&c=JbgDGa81XKRdx4rzrgtKQFPDt_-9gpe-8Oryo1whdas=' }} />
          </View>
          <View style= {styles.inputContainer}>
            <View style= {styles.inputItiem}>
              <Text>
                User Name
              </Text>
              <TextInput placeholder='Enter UserName' onChangeText={setUserName} placeholderTextColor = 'grey' style = {styles.textInput} />
            </View>
            <View>
              <Text style= {styles.inputItiem}>
                Password
              </Text>
              <TextInput placeholder='Enter PassWord' onChangeText={setPassword} placeholderTextColor = 'grey' style = {styles.textInput} />
            </View>
          </View>
          <View style = {styles.buttonContainer}>
            <Button color = 'white' title='onPress' onPress={handleOnPress}/>
          </View>
        </View>  
      </ImageBackground>
      
    );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 250,
    width: 250
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,

  },
  inputItiem: {
    marginTop: 10
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    marginTop: 5,
    paddingStart: 5,
    fontSize: 15,
    borderRadius: 10
  },
  buttonContainer: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'grey',
    marginBottom: 90,
    borderRadius: 10
  },
});
