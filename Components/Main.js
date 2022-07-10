import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LoginPage from "./LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const homeScreen = require("../assets/homeScreen.jpg");

export default function Main({ navigation }) {
  return (
    <View style={styles.homeStyles}>
      {/* <StatusBar hidden={true} /> */}
      <View style={styles.styeleH}>
        <Text style={styles.companyLogo}>Bardeal</Text>
      </View>
      <View>
        <Image style={styles.tinyLogo} source={homeScreen} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.styeleH}>
        <Text style={styles.TextStyleHeader}>Latest outfit</Text>
      </View>
      <View style={styles.styeleH}>
        <Text style={styles.TextStyleTitle}>
          There are many new outfits that make you cool{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  homeStyles: {
    backgroundColor: "white",
    paddingBottom: 160,
  },
  styeleH: {
    alignItems: "center",
    justifyContent: "center",
  },
  TextStyleHeader: {
    color: "grey",
    fontSize: 30,
    marginTop: 40,
  },
  TextStyleTitle: {
    color: "grey",
    fontSize: 18,
    marginTop: 10,
    marginRight: 60,
    marginLeft: 60,
    justifyContent: "center",
  },
  companyLogo: {
    justifyContent: "center",
    fontSize: 60,
    color: "pink",
    alignItems: "center",
  },
  tinyLogo: {
    width: 450,
    height: 300,
    alignItems: "center",
    marginTop: 40,
  },
  btnStyles: {
    borderRadius: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    shadowColor: "black",
    shadowOpacity: 0.8,
    elevation: 6,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
