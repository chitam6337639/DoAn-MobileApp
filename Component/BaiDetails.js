import { Button, Card, Input } from "react-native-elements"
import { Alert, Text } from "react-native";
import { useState } from "react";

function BaiDetails({route,navigation})
{
    const [inputValue, setInputValue] = useState("");
    const {item} = route.params;
    const handleResult = ()=>{
        if(inputValue==item.answear)
        {
            return (
                Alert.alert('Ban da lam dung')
                
            )
        }
        else 
        return(
            Alert.alert('Ban da lam sai')
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
            <Button title={'Submit'}onPress={handleResult}></Button>
            <Button title={'Go Back'}onPress={()=>{navigation.goBack()}}></Button>
        </Card>
    )
}
export default BaiDetails;