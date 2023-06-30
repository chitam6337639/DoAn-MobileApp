import { Button, Card } from "react-native-elements";
import { View, Text } from "react-native";



function Contact({ navigation }) {

    return (
        <View style={{ padding: 10 }}>
            <Card>
                <Card.Title>Contact Us here</Card.Title>
                <Card.Divider></Card.Divider>
                <Text>If you have any complaint, feedback about our app, Please contact:</Text>
                <Text>
                    Name: Tam Nguyen
                </Text>
                <Text>Email:tam.nc11795@sinhvien.hsu.edu.vn</Text>
                <Text>
                    Name: Thanh Hoang
                </Text>
                <Text>Email:thanh.hc11566@sinhvien.hsu.edu.vn</Text>
                <View style={{ padding: 10 }}></View>
                <Button title='Send feedback here' onPress={() => navigation.navigate('Feedback')}>

                </Button>
            </Card>

        </View>
    );
}


export default Contact;