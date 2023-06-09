import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Component/HomePage';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculator from './Component/Calculator';
import Quotes from './Component/Quotes';
import Dictionary from './Component/Dictionary';
import { createStackNavigator } from '@react-navigation/stack';
import Math from './Component/Math';
import Note from './Component/Note';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LearnSomeThing" options={{ headerShown: false }} component={HomePage}></Stack.Screen>
      <Stack.Screen name="Math" options={{ headerShown: false }} component={Math}></Stack.Screen>
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={StackNavigator} />
          
          <Drawer.Screen name ="Note" component={Note} />
          <Drawer.Screen name="Calculator" component={Calculator} />
          <Drawer.Screen name="Quotes" component={Quotes} />
          <Drawer.Screen name="Dictionary" component={Dictionary} />
        </Drawer.Navigator>
      </NavigationContainer>

    );
  }
}


export default App;

