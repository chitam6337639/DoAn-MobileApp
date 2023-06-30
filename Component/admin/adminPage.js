import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';


import { ENGLISH ,addLesson} from '../Server/english';
const AdminPage = () => {
  const [newLesson, setNewLesson] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAddLesson = () => {
    const newId = ENGLISH.length;
    const newLessonObj = {
      id: newId,
      name: newLesson,
      question: newQuestion,
      answer: newAnswer,
    };

    try {
        addLesson(newLessonObj); // Call the exported function to update the array
    
        setNewLesson('');
        setNewQuestion('');
        setNewAnswer('');
    
        // Display success message
        alert('Lesson added successfully!');
      } catch (error) {
        // Display error message
        alert('Failed to add lesson. Please try again.');
        console.error(error);
      }
  };

  return (
    <View>
      {/* Input fields for new lesson */}
       {/* <TextInput
        placeholder="Lesson"
        value={newLesson}
        onChangeText={setNewLesson}
      />
      <TextInput
        placeholder="Question"
        value={newQuestion}
        onChangeText={setNewQuestion}
      />
      <TextInput
        placeholder="Answer"
        value={newAnswer}
        onChangeText={setNewAnswer}
      /> */}

      {/*  Button to add new lesson 
      <Button title="Add Lesson" onPress={handleAddLesson} />  */}
    </View>
  );
};

export default AdminPage;