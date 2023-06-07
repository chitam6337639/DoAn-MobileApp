import { View,Text } from "react-native";
import { Button } from "react-native-elements";

function Math({navigation})
{
    return (
        <View>
            <Text>Math</Text>
            <Button
               title="Go Back"
           onPress={() => navigation.goBack()}
/>
        </View>
    );
}

export default Math;