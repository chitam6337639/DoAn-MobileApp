import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ketqua: "",
    };
  }

  buttonPressed = (text) => {
    console.log(text);
    if(text === 'C')
    {
        this.setState({ketqua: ""});
    }else if(text === '=')
    {
        this.calculate();
    }
    else
        this.setState({ ketqua :this.state.ketqua + text });
        
  };
  calculate()
  {
    let result = "";
    try {
      result = eval(this.state.ketqua);
    } catch (error) {
      result = "Ban da nhap sai vui long nhap lai";
      this.setState({ ketqua: result });
      setTimeout(() => {
        this.setState({ ketqua: "" });
      }, 1500); 
      return ;
    }
    this.setState({ ketqua: result });
  };
  render() {
    return (
      <Animatable.View animation='fadeInDown' duration={500} delay={500}>
      <View>
        <View >
          <Text style={[styles.text,]}>{this.state.ketqua}</Text>
        </View>
        <View style={styles.bigview}>
          <View style={styles.row}>
            {this.NumButton(1)}
            {this.NumButton(2)}
            {this.NumButton(3)}
            {this.NumExpression("+")}
          </View>
          <View style={styles.row}>
            {this.NumButton(4)}
            {this.NumButton(5)}
            {this.NumButton(6)}
            {this.NumExpression("-")}
          </View>
          <View style={styles.row}>
            {this.NumButton(7)}
            {this.NumButton(8)}
            {this.NumButton(9)}
            {this.NumExpression("*")}
          </View>
          <View style={styles.row}>
            {this.NumButton(0)}
            {this.NumExpression("C")}
            {this.NumExpression("=")}
            {this.NumExpression("*")}
          </View>
        </View>
      </View>
      </Animatable.View>
    );
  }

  NumButton(num) {
    return (
      <TouchableOpacity onPress={() => this.buttonPressed(num)}>
        <Text style={styles.button}>{num}</Text>
      </TouchableOpacity>
    );
  }

  NumExpression(exp) {
    return (
      <TouchableOpacity onPress={() => this.buttonPressed(exp)}>
        <Text style={styles.buttonExp}>{exp}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 300,
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 100,
    textAlign: "center",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    backgroundColor: "grey",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonExp: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    backgroundColor: "orange",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 30,
    alignItems: "flex-start",
  },
  bigview: {},
});

export default Calculator;