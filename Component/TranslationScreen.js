import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const TranslationApp = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const translateText = async () => {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        null,
        {
          params: {
            q: text,
            target: 'vi', // e.g., 'en' for English
            key: 'AIzaSyDJLjF36D0ggpxQjmTqWjILauY-LstSabM',
          },
        }
      );

      const translatedText = response.data.data.translations[0].translatedText;
      setTranslation(translatedText);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        placeholder="Enter text to translate to VietNamese"
        value={text}
        onChangeText={setText}
      />
      <Button title="Translate" onPress={translateText} />
      <View style={{paddingTop:15}}>
        <Text>Translation: {translation}</Text>
      </View>
      
    </View>
  );
};

export default TranslationApp;