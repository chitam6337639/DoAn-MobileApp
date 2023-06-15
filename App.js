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
import { Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
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
          <Drawer.Screen name="Home" component={StackNavigator}  options={{
            drawerIcon:({focused,size}) => (<FontAwesome
              name="home"
              size={size}
              color={focused?'#7cc':'#ccc'}
            />)
          }}/>
          
          <Drawer.Screen name ="Note" component={Note} options={{
            drawerIcon:({focused,size}) => (<FontAwesome
              name="sticky-note-o"
              size={size}
              color={focused?'#7cc':'#ccc'}
            />)
          }} />
          <Drawer.Screen name="Calculator" component={Calculator} options={{
            drawerIcon:({focused,size}) => (<FontAwesome
              name="calculator"
              size={size}
              color={focused?'#7cc':'#ccc'}
            />)
          }}/>
          <Drawer.Screen name="Quotes" component={Quotes} options={{
            drawerIcon:({focused,size}) => (<FontAwesome
              name="quote-left"
              size={size}
              color={focused?'#7cc':'#ccc'}
            />)
          }}/>
          <Drawer.Screen name="Dictionary" component={Dictionary} options={{
            drawerIcon:({focused,size}) => (<FontAwesome
              name="book"
              size={size}
              color={focused?'#7cc':'#ccc'}
            />)
          }}/>
        </Drawer.Navigator>
      </NavigationContainer>

    );
  }
}


export default App;

