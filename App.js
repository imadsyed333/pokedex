import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Pokedex from './components/Pokedex';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title}>Pokedex</Text>
        <Image style={styles.logo} source={{uri: "https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"}}/>
      </View>
      <Pokedex/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF8E2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  title: {
    fontSize: 40,
    fontWeight:"500",
    flexDirection: 'row',
    alignItems:'center',
    alignSelf: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    padding: 10,
  }
});
