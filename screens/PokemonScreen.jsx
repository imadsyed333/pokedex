import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
} from "react-native";

export default function PokemonScreen({ route }) {
  const Types = ({ pokemon }) => {
    const typeString = "";
    const types = pokemon.types;
    for (let i = 0; i < types; i++) {
      console.log(types[i].type.name);
      typeString.concat(types[i].type.name, ", ");
    }
    return <Text style={styles.text}>Types: {typeString}</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.sprite} source={{ uri: route.params.art }} />
        <Text style={[styles.text, styles.title]}>{route.params.name}</Text>
        <Types pokemon={route.params.pokemon} />
        <Text style={styles.text}></Text>
      </View>
    </SafeAreaView>
  );
}

const spriteDim = Dimensions.get("screen").width - 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF8E2",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  card: {
    backgroundColor: "#EE6352",
    borderRadius: 10,
    padding: 10,
  },
  sprite: {
    height: spriteDim,
    width: spriteDim,
  },
  text: {
    fontSize: 20,
    color: "#EFF8E2",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
