import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";

export default function Pokedex(props) {
  const [pokemon, setPokemon] = useState([]);
  const [tempPokemon, setTempPokemon] = useState([]);
  const [query, setQuery] = useState("");

  const getPokemon = async () => {
    const tempList = [];

    const pokedexResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const pokedexJson = await pokedexResponse.json();
    const results = pokedexJson.results;
    for (let i = 0; i < results.length; i++) {
      const pokemonResponse = await fetch(results[i].url);
      const pokemonJson = await pokemonResponse.json();
      tempList.push(pokemonJson);
    }
    setPokemon(tempList);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    setTempPokemon(
      pokemon.filter((a) => {
        return a.name.toLowerCase().startsWith(query.toLowerCase());
      })
    );
  }, [pokemon, query]);

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
        renderItem={({ item }) => (
          <Pokemon
            pokemon={item}
            name={item.name}
            sprite={item.sprites.front_default}
            art={item.sprites.other["official-artwork"].front_default}
            navigation={props.navigation}
          />
        )}
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
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 10,
  },
});
