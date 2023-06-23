import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Dictionary() {
  const [newWord, setNewWord] = useState("");
  const [checkedWord, setCheckedWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");

  const searchWord = (enteredWord) => {
    setNewWord(enteredWord);
  };

  const getInfo = () => {
    var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + newWord;

    return fetch(url)
      .then((data) => data.json())
      .then((response) => {
        var word = response[0].word;
        setCheckedWord(word);

        var def = response[0].meanings[0].definitions[0].definition;
        setDefinition(def);

        var eg = response[0].meanings[0].definitions[0].example;
        setExample(eg);
      });
  };

  const clear = () => {
    setCheckedWord("");
    setDefinition("");
    setExample("");
    setNewWord("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Search a word"
        placeholderTextColor="rgba(0,0,0,0.7)"
        textAlign="center"
        clearButtonMode="always"
        onChangeText={searchWord}
        value={newWord}
      />

      <TouchableOpacity style={styles.buttonDesign} onPress={getInfo}>
        <Text style={styles.buttonText}>Go!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonDesign} onPress={clear}>
        <Text style={styles.buttonText}>Clear</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.resultContainer}>
        <Text style={styles.resultLabel}>Enter word:</Text>
        <Text style={styles.resultText}>{checkedWord}</Text>

        <Text style={styles.resultLabel}>Definition:</Text>
        <Text style={styles.definitionText}>{definition}</Text>

        <Text style={styles.resultLabel}>Example:</Text>
        <Text style={styles.resultText}>{example}</Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "rgba(80, 235, 236, 1)",
    marginTop: 100,
    fontSize: 25,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonDesign: {
    backgroundColor: "rgba(80, 235, 236, 0.3)",
    width: 120,
    height: 40,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 50,
    alignItems: "flex-start", // Aligns content to the left
    paddingHorizontal: 20,
    width:400
  },
  resultLabel: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  resultText: {
    fontSize: 25,
    backgroundColor: "rgba(80, 235, 236, 0.3)",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "100%",
  },
  definitionText: {
    fontSize: 25,
    backgroundColor: "rgba(80, 235, 236, 0.3)",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "100%",
    textAlign: "justify", // Justify the text to prevent jagged edges
  },
});