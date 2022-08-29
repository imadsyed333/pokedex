import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

const Pokemon = React.memo(function Pokemon(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate("Pokemon", {
          name: props.name,
          sprite: props.sprite,
          art: props.art,
        });
      }}
    >
      <Image style={styles.sprite} source={{ uri: props.sprite }}></Image>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
});

export { Pokemon };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EE6352",
    alignItems: "center",
    padding: 5,
    margin: 5,
    alignSelf: "stretch",
    borderRadius: 10,
  },
  sprite: {
    width: 100,
    height: 100,
  },
  text: {
    color: "white",
    margin: 10,
    fontSize: 20,
  },
});
