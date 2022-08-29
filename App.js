import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import PokemonScreen from './screens/PokemonScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name='Pokemon' component={PokemonScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
    fontWeight:"bold",
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
