import { Button, Card, Input } from "react-native-elements"
import { Alert, Text } from "react-native";
import { useState } from "react";

import { View } from "react-native";
function BaiDetails({route,navigation})
{
    let isDone = false;
    const [inputValue, setInputValue] = useState("");
    const {item} = route.params;
    const handleResult = ()=>{
        if(inputValue==item.answear)
        {
            return (
                Alert.alert('Bạn đã làm đúng')
                
            )
        }
        else 
        return(
            Alert.alert('Bạn đã làm sai')
        )
    }
    const handleInputChange = (text)=>{
        setInputValue(text);
    }
    return(
        <Card>
            <Card.Title>{item.name}</Card.Title>
            <Text>{item.question}</Text>
            <Input onChangeText={handleInputChange}></Input>
            <View style={{margin:20}}>
            <Button title={'Submit'}onPress={handleResult}></Button>
            </View>
            
            <Button title={'Go Back'}onPress={()=>{navigation.goBack()}}></Button>
        </Card>
    )
}
export default BaiDetails;