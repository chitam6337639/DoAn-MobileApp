import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { getDatabase, ref, push, set, child } from 'firebase/database';

function Feedback({ navigation }) {
  const [text, setText] = useState('');

  const handleButtonPress = () => {
    const dbRef = ref(getDatabase());
    const newTextRef = push(child(dbRef, 'accounts/'));

    set(newTextRef, {
      text: text,
    })
      .then(() => {
        alert('Ok baby!');
      })
      .catch((error) => alert('Could not set data from Firebase', error));
  };

  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Enter text"
        onChangeText={(value) => setText(value)}
      />
      <Button title="Submit your thought" onPress={handleButtonPress} />
      <View style={{padding:10}}></View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Feedback;