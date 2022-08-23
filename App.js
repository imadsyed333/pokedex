import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Pokedex from './components/Pokedex';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
});
