import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
