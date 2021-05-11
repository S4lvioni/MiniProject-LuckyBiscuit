import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      img: require("./imagens/biscoito.png")
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      "Frase1",
      "Frase2",
      "Frase3",
      "Frase4",
      "Frase5"
    ];
  }

  quebraBiscoito() {
    let random = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[random] + '"',
      img: require("./imagens/biscoitoAberto.png")
    })
  }


  render() {
    return (
      <View style={styles.container} >
        <Image
          source={this.state.img}
          style={styles.img}>
        </Image>

        <Text style={styles.textoFrase}>
          {this.state.textoFrase}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 200,
    height: 200
  },
  textoFrase: {
    fontSize: 40,
    color: "red"
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold"
  }
})


export default App;
