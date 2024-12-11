import React, { useEffect, useState } from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const HomeScreen = () => {
  const imageBackground = require("../assets/images/backgroundHouse.png");

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "142807f4c341d11a1ff6556e72da533c";
  const city = "Danang";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=vi`;

  useEffect(() => {
    axios
      .get(url)
      .then((Response) => {
        setWeatherData(Response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Lỗi: {error.message}</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={imageBackground} style={styles.imageBackground}>
      <View style={styles.homeContainer}>
        <View style={styles.headerBar}>
          <Text style={styles.text}>
            <Icon name="home"  /> My Home
          </Text>
          <Text style={styles.text}>
            <Icon name="plus" /> Add device
          </Text>
        </View>
        <View style={styles.weather}>
          <View style={styles.container}>
            <View style={{flex: 0.9}}>
              <Text style={styles.cityName}>{weatherData.name}</Text>
              <Text style={styles.temp}>{weatherData.main.temp}°C</Text>
            </View>
            <View style={{flex:0.1, justifyContent:'space-between', flexDirection: 'row'}}>
                <Text>
                    Living Room
                </Text>
              <Text style={styles.humidity}>
                Humidity: {weatherData.main.humidity}%
              </Text>
              <Text style={styles.windSpeed}>
                windspeed: {weatherData.wind.speed} m/s
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.allDevice}>
          <Text style={styles.text}>All Device</Text>
        </View>
        <View style={{ flex: 0.6 }}>
          <ScrollView contentContainerStyle={styles.frameDevice}>
            <View style={styles.itemDevice}>
              <View style={styles.device}>
                <Text>Device 1</Text>
              </View>
              <View style={styles.device}>
                <Text>Device 2</Text>
              </View>
            </View>
            <View style={styles.itemDevice}>
              <View style={styles.device}>
                <Text>Device 1</Text>
              </View>
              <View style={styles.device}>
                <Text>Device 2</Text>
              </View>
            </View>
            <View style={styles.itemDevice}>
              <View style={styles.device}>
                <Text>Device 1</Text>
              </View>
              <View style={styles.device}>
                <Text>Device 2</Text>
              </View>
            </View>
            <View style={styles.itemDevice}>
              <View style={styles.device}>
                <Text>Device 1</Text>
              </View>
              <View style={styles.device}>
                <Text>Device 2</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.menuBar}>
          <Text style={styles.text}>Menu bar</Text>
          <Text style={styles.text}>Menu bar</Text>
          <Text style={styles.text}>Menu bar</Text>
          <Text style={styles.text}>Menu bar</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  homeContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 20,
    
  },
  headerBar: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 30,
    maxHeight: 30,
  },
  weather: {
    flex: 0.2,
    borderRadius: 10,
    marginBottom: 10,
  },
  allDevice: {
    flex: 0.1,
    borderBottomWidth: 1,
    maxHeight: 20,
    borderColor: 'white'
  },
  frameDevice: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: 10,
  },
  itemDevice: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  device: {
    flex: 0.45,
    borderWidth: 1,
    maxWidth: 180,
    borderColor: 'white',
    maxHeight: 200,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  menuBar: {
    flex: 0.1,
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopWidth: 1,
    marginTop: 20,
    borderColor: 'white'
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    maxHeight: 200
  },
  cityName: {
    fontSize: 20,
    marginBottom: 10,
  },
  temp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#ff6347",
  },
  humidity: {
    fontSize: 12,
  },
  windSpeed: {
    fontSize: 12,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  text: {
    color: 'white'
  }
});
