
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import Calculator from './Component/Calculator';
import Quotes from './Component/Quotes';
import Dictionary from './Component/Dictionary';
import Math from './Component/Subject/Math';
import Note from './Component/Note';
import English from './Component/Subject/English';
import BaiDetails from './Component/BaiDetails';
import HomePage from './Component/HomePage';
import TranslationScreen from './Component/TranslationScreen';
import History from './Component/Subject/History'
import AdminPage from './Component/admin/adminPage';
//redux
import { Provider } from "react-redux";
import { store, persistor } from "./Component/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Contact from './Component/Contact';
import Feedback from './Component/Feedback';
// firebase
import { initializeApp } from 'firebase/app';


const firebaseConfig = { databaseURL: 'https://doannopthay-default-rtdb.asia-southeast1.firebasedatabase.app/' };
initializeApp(firebaseConfig);

// const database = getDatabase();
// export defaultdatabase;


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LearnSomeThing" options={{ headerShown: false }} component={HomePage}></Stack.Screen>
      <Stack.Screen name="Math" options={{ headerShown: false }} component={Math}></Stack.Screen>
      <Stack.Screen name="English" options={{ headerShown: false }} component={English}></Stack.Screen>
      <Stack.Screen name="Details" options={{ headerShown: false }} component={BaiDetails}></Stack.Screen>
      <Stack.Screen name="History" options={{ headerShown: false }} component={History}></Stack.Screen>
    </Stack.Navigator>
  );
}
const Stack2 = createStackNavigator();
function StackNavigator1()
{
  return(
    <Stack2.Navigator>
      <Stack2.Screen name="Contact" component={Contact} options={{headerShown: false}}></Stack2.Screen>
      <Stack2.Screen name="Feedback" component={Feedback} options={{headerShown: false}}></Stack2.Screen>
    </Stack2.Navigator>
  );
}
const Drawer = createDrawerNavigator();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Home" component={StackNavigator} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="home"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />

              <Drawer.Screen name="Note" component={Note} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="sticky-note-o"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />
              <Drawer.Screen name="Calculator" component={Calculator} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="calculator"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />
              <Drawer.Screen name="Quotes" component={Quotes} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="quote-left"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />
              <Drawer.Screen name="Dictionary" component={Dictionary} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="book"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />
                <Drawer.Screen name="Translation" component={TranslationScreen} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="google"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />
               <Drawer.Screen name="Contact & Feedback" component={StackNavigator1} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="address-book"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />
                <Drawer.Screen name="Admin (Underconstruced)" component={AdminPage} options={{
                drawerIcon: ({ focused, size }) => (<FontAwesome
                  name="cog"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
                />)
              }} />
              
            </Drawer.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}


export default App;

