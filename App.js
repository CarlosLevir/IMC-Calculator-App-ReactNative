import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      massa: null,
      altura: null,
      resultado: null,
      descricao: null,
    }
  }

  calcular = () => {

    if(this.state.massa == null || this.state.altura == null){
      this.setState({
        descricao: "Digite um valor válido",
      })
    }
    else{
      let imc = this.state.massa / Math.pow(this.state.altura, 2);
      let descricao = null;

      if(imc < 16){
        descricao = "Magreza Grave";
      }
      else if(imc < 17)
        descricao = "Magreza Moderada";
      else if(imc < 18.5)
        descricao = "Magreza Leve";
      else if(imc < 25)
        descricao = "Saudável";
      else if(imc < 30)
        descricao = "Sobrepeso";
      else if(imc < 35)
        descricao = "Obesidade Grau I";
      else if(imc < 40){
        descricao = "Obesidade Grau II";
      }
      else{
        descricao = "Obesidade Grau III";
      }

      this.setState({
        resultado: imc.toFixed(2),
        descricao,
      })
    }
  }

  alterarMassa = (e) => {
    this.setState({
      massa: e
    })
  }

  alterarAltura = (e) => {
    this.setState({
      altura: e
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="Massa"  keyboardType="numeric" onChangeText={this.alterarMassa} />
          <TextInput style={styles.input} placeholder="Altura" keyboardType="numeric" onChangeText={this.alterarAltura} />
        </View>
          <TouchableOpacity style={styles.calcularButton} onPress={this.calcular}>
            <Text style={styles.calcularText}>
              Calcular
            </Text>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.resultado}</Text>
          <Text style={styles.result}>{this.state.descricao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputs: {
    flexDirection: 'row'
  },
  calcularButton: {
    backgroundColor: '#3f51b5',
    padding: 20,
  },
  calcularText: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'white',
  },
  input: {
    height: 80,
    width: '50%',
    textAlign: 'center',
    fontSize: 50,
    marginTop: 24,
  },
  result: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 50,
    padding: 15,
  }
});
