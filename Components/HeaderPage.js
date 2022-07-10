import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HeaderPage({ title }) {
  return (
    <View style={styles.heading}>
      <Text style={styles.TextFile}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TextFile: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
});
