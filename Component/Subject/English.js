import { View, Text ,TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { ENGLISH } from "../Server/english";
import { Card } from "react-native-elements";

function English({ navigation }) {
  const  handlePressCard = (item) =>{
    navigation.navigate('Details', { item ,navigation});
  }
    return (
        <View>
            {ENGLISH.map((item) => (
                <TouchableOpacity onPress={()=>handlePressCard(item)}>
                    <Card>
                        <Text key={item.id}>{item.name} : {item.question}</Text>
                    </Card>
                </TouchableOpacity>
            ))}
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default English;