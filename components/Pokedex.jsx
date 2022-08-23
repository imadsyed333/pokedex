import { Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json.results);
      })
      .catch((error) => {
        console.log(error);
        alert("Cannot fetch Pokemon");
      });
  };
  return (
    <FlatList
      data={pokemon}
      renderItem={({ item }) => <Pokemon name={item.name} />}
    />
  );
}
