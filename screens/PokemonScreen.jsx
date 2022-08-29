import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function PokemonScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.sprite} source={{ uri: route.params.art }} />
        <Text>{route.params.name}</Text>
      </View>
    </SafeAreaView>
  );
}

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
  },
  sprite: {
    height: 400,
    width: 400,
  },
});
