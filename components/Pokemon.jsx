import { View, Text, TouchableOpacity, Image } from "react-native";
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
    <TouchableOpacity>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: spriteLink }}
      ></Image>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
}
