import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }
  calculateTheValue = currency => {
    if (this.state.inputValue === "") {
      console.log("Enter Indian Currency");
    } else {
      let result = this.state.inputValue * currencyPerRupee[currency];
      this.setState({ resultValue: result.toFixed(2) });
    }
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <View style={styles.textArea}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                selectionColor="#FFF"
                keyboardType="numeric"
                placeholder="Enter Indian Currency"
                onChangeText={inputValue =>
                  this.setState({
                    inputValue
                  })
                }
              >
                {this.state.inputValue}
              </TextInput>
            </View>
          </View>

          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("DOLLAR")}
            >
              <Text style={styles.conerterButtonText}>Dollar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("EURO")}
            >
              <Text style={styles.conerterButtonText}>Euro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("POUND")}
            >
              <Text style={styles.conerterButtonText}>Pound</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("RUBEL")}
            >
              <Text style={styles.conerterButtonText}>Rubel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("AUSDOLLAR")}
            >
              <Text style={styles.conerterButtonText}>AusDollar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("CANDOLLAR")}
            >
              <Text style={styles.conerterButtonText}>CanDollar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("YEN")}
            >
              <Text style={styles.conerterButtonText}>Yen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("DINAR")}
            >
              <Text style={styles.conerterButtonText}>Dinar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.converterButton}
              onPress={() => this.calculateTheValue("BITCOIN")}
            >
              <Text style={styles.conerterButtonText}>Bitcoin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F363F"
  },
  screenView: {
    flex: 1,
    marginTop: 20
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#2475B0",
    backgroundColor: "#2C3335",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5
  },
  resultValue: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff"
  },
  textArea:{
    flex:2
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2475B0",
    backgroundColor: "#2C3335",
    borderRadius: 5
  },
  inputText: {
    fontSize: 30,
    fontWeight: "normal",
    color: "#fff",
    
    
  },
  converterButtonContainer: {
    flex:3,
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#2475B0",
    borderWidth: 2
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C3335",
    height: 100,
    borderColor: "#2475B0",
    borderWidth: 2,
    width: "33.3%"
  },
  conerterButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
