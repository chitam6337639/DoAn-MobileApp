import React, { Component } from "react";
import { Text } from "react-native-elements";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';


function HomePage({ navigation }) {
    return (
        <View>
           
            <Button
                title="Go to Math"
                onPress={() => navigation.navigate('Math')}
            />
        </View>
    );
}
export default HomePage;