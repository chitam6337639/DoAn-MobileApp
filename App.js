import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Component/HomePage';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculator from './Component/Calculator';
import Quotes from './Component/Quotes';
import Dictionary from './Component/Dictionary';
const Drawer = createDrawerNavigator();
class App extends Component{
  render()
  {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Calculator" component={Calculator} />
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Quotes" component={Quotes} />
          <Drawer.Screen name="Dictionary" component={Dictionary} />
        </Drawer.Navigator>
      </NavigationContainer>
      
    );
  }
}


export default App;

