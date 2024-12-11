import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const imageBackground = require("../assets/images/backgroundHouse.png");
  const imageLogo = require("../assets/images/logo-smart-home.png");

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleOnPress = () => {
    // check userName
    const checkSpace = /\s/;
    const checkAccents = /[[áàảạãâầấẩậăắẳặâ]/i;
    if (checkSpace.test(username)) {
      Alert.alert("Username khong duoc chua khoang trắng");
    } else if (checkAccents.test(username)) {
      Alert.alert("Username khong duoc chua dau");
    } else {
      console.log("username", username);
    }
    console.log("password", password);
    navigation.navigate("HomeScreen");
  };
  // tạo ẩn hiện password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordVisible = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <ImageBackground source={imageBackground} style={styles.imageBackground}>
      <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>SMART HOME</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={imageLogo} />
          </View>
          <View style={styles.inputContainer}>
            <View>
              <View style={styles.item}>
                <Icon name="user" size={40} style={styles.icon} />
                <Text style={styles.inputText}>USER NAME</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={{ flex: 1, color: "white", marginStart: 5 }}
                  placeholder="Enter UserName"
                  onChangeText={setUserName}
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
              </View>
            </View>
            <View>
              <View style={styles.item}>
                <Icon name="lock" size={40} style={styles.icon} />
                <Text style={styles.inputText}>PASSWORD</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.iconInput}
                  placeholder="Enter PassWord"
                  onChangeText={setPassword}
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={handlePasswordVisible}>
                  {passwordVisible ? (
                    <Icon style={styles.iconPassword}
                      name="eye"
                      size={20}
                      
                    ></Icon>
                  ) : (
                    <Icon
                      name="eye-slash"
                      size={20}
                      style={styles.iconPassword}
                    ></Icon>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button color="white" title="Login" onPress={handleOnPress} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "Arial",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 0.5,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  logoContainer: {
    flex: 2,
    marginBottom: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 250,
    width: 250,
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  inputText: {
    color: "white",
    fontWeight: "bold",
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.4)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginTop: 5,
    paddingStart: 5,
    fontSize: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.35,
    borderColor: "gray",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 90,
    borderRadius: 10,
  },
  icon: {
    marginEnd: 10,
    fontSize: 20,
    color: "white",
  },
  iconInput: {
    flex: 1,
    color: "white",
    marginStart: 5,
  },
  iconPassword: {
    color : 'white',
    marginEnd: 20
  }
});
