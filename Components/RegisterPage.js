import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
const logoImage = require("../assets/avalanche.jpg");

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  return (
    <View style={styles.loginBackground}>
      <View style={styles.topMarginImage}>
        <Image style={styles.logoImage} source={logoImage} />
      </View>
      <View style={styles.styeleH}>
        <Text style={styles.TextStyleHeader}>Register in to Bardeal</Text>
      </View>
      <View style={styles.loginMArgin}>
        <Text style={styles.textField}>User Name</Text>
        <TextInput
          onChangeText={setUserName}
          value={username}
          placeholder="User Name"
          style={styles.inputField}
        />
        <Text style={styles.textField}>Email</Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="example@gmail.com"
          style={styles.inputField}
        />
        <Text style={styles.textField}>Password</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          style={styles.inputField}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputField: {
    height: 45,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 10,
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 28,
    marginRight: 28,
    marginTop: 60,
    marginBottom: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 15,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  styeleH: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginMArgin: {
    marginBottom: 200,
  },
  topMarginImage: {
    marginTop: 60,
  },
  TextStyleHeader: {
    color: "slategray",
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold",
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    fontSize: 18,
  },
  loginBackground: {
    backgroundColor: "white",
  },
  logoImage: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 140,
  },
});
