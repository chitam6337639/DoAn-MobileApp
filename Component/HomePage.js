import React, { Component } from "react";
import { Divider, Text } from "react-native-elements";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { Card } from "react-native-elements";

function HomePage({ navigation }) {
    return (
        <View>
            <Card>
            <Card.Image source={require('../assets/math.png')} />
                <Button
                    title="Learn some Math"
                    onPress={() => navigation.navigate('Math')}
                />
            </Card>

            <Divider />
            <Card>
                <Card.Image source={require('../assets/english.jpg')} />
                <Button
                    title="Learn some English"
                    onPress={() => navigation.navigate('English')}
                />
            </Card>

        </View>
    );
}
export default HomePage;