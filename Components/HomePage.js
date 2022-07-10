import axios from "axios";
import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SectionGrid } from "react-native-super-grid";

export default function HomePage() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    function getProducts() {
      axios
        .get("https://limitless-lake-55070.herokuapp.com/product/")
        .then((result) => {
          setItems(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getProducts();
  }, []);

  return (
    <SectionGrid
      // staticDimension={300}
      // fixed
      // spacing={20}
      sections={[
        {
          data: items,
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <View
          style={[styles.itemContainer, { backgroundColor: "white" }]}
          key={index}
        >
          <Image style={styles.tinyLogo} source={{ uri: item.imageURL }} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>Rs. {item.price}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    alignItems: "center",
    marginLeft: 40,
  },
  itemContainer: {
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 150,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
    alignContent: "center",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    fontSize: 14,
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    alignItems: "center",
    backgroundColor: "#636e72",
    color: "white",
    padding: 10,
  },
});
