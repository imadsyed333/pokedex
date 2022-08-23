import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [tempPokemon, setTempPokemon] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    setTempPokemon(
      pokemon.filter((a) => {
        return a.name.toLowerCase().startsWith(query.toLowerCase());
      })
    );
  }, [query, pokemon]);

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
    <View style={styles.container}>
      <TextInput
        placeholder={"Search for pokemon here"}
        style={styles.search}
        onChangeText={setQuery}
        value={query}
      />
      <FlatList
        style={styles.container}
        data={tempPokemon}
        renderItem={({ item }) => <Pokemon name={item.name} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    alignContent: "space-around",
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  search: {
    backgroundColor: "#CED5DE",
    color: "black",
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
  },
});
