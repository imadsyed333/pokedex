import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

export default function Pokemon(props) {
  const [spriteLink, setSpriteLink] = useState("");
  useEffect(() => {
    getSprite();
  }, []);
  const getSprite = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + props.name;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setSpriteLink(json.sprites.front_default);
      })
      .catch((error) => {
        console.log(error);
        alert("Cannot fetch image");
      });
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.sprite} source={{ uri: spriteLink }}></Image>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
}

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
