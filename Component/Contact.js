import { Card } from "react-native-elements";
import { View,Text } from "react-native";
const { Component } = require("react")


class Contact extends Component {
    render() {
        return (
           <View style={{padding:10}}>
                <Card>
                    <Card.Title>Contact Us here</Card.Title>
                    <Card.Divider></Card.Divider>
                    <Text>If you have any complaint, feedback about our app, Please contact</Text>
                    <Text>
                            Name: Tam Nguyen
                            PhoneNum:
                            Email:
                    </Text>
                    <Text>
                        Name: Thanh Hoang
                        PhoneNum:
                        Email:
                    </Text>
                </Card>
            </View>
        );
    }
}

export default Contact;