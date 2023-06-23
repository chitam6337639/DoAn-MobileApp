import { View, Text ,TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { HISTORY } from "../Server/history";
import { Card } from "react-native-elements";

function History({ navigation }) {
  const  handlePressCard = (item) =>{
    navigation.navigate('Details', { item ,navigation});
  }
    return (
        <View>
            {HISTORY.map((item) => (
                <TouchableOpacity onPress={()=>handlePressCard(item)}>
                    <Card>
                        <Text key={item.id}>{item.name} : {item.question}</Text>
                    </Card>
                </TouchableOpacity>



            ))}
            <View style={{paddingTop:20}}>
                <Button
                    title="Go Back"
                    onPress={() => navigation.goBack()}
                />
            </View>
            
        </View>
    );
}

export default History;