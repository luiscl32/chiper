
/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
  'use strict';

  import React, { Component } from 'react';
  import {Container, Content, } from 'native-base';
  import {Image,View,Text,Alert, KeyboardAvoidingView} from 'react-native';
  import {Actions} from 'react-native-router-flux';
  import {Headers, Buttons, Form} from '../commons';
  import {registerStyles} from './styles';
/*= End of dependencias =*/
/*=============================================<<<<<*/


class register extends Component {
  /*----------- constructor -----------*/
    constructor(props) {
      super(props);

      this.state = {
        username: '',
        email: '',
        password: '',
      };
    }
  /*----------- components -----------*/
  /*----------- funciones -----------*/
  /* handles */
  onChangeUsername(username){
    this.setState({username})
  }

  onChangeEmail(email){
    this.setState({email})
  }

  onChangePassword(password){
    this.setState({password})
  }

  /* onRegister */
  onRegister(){
    const {username,email,password} = this.state;
    if(username !== '' && email !== '' && password != '') {
      Alert.alert(
        'Aviso',
        'Usuario registrado',
        [{text:'ok', onPress: () => {Actions.pop()}}])
    }else{
      Alert.alert(
        'Error',
      'Debe llenar los campos');
    }
  }

  /*----------- render -----------*/
  render() {
    return (
      <Container>
        <Headers
          headerStyle={registerStyles.header}
          IconName={"arrow-back"}
          iconStyle={registerStyles.icon}
          Title={"Registro"}
          titleStyle={registerStyles.title}
          onPress={()=>{Actions.pop()}}
        />
        <View style={registerStyles.container}>
            <Image
              style={registerStyles.image}
              source={require('../../../assets/images/logo-2.png')}
            />
          {/*----------- body -----------*/}
            <Text style={registerStyles.titleText}>Registrate</Text>

                  <Form
                    style={registerStyles.form}
                    placeholder={"Número de Documento"}
                    onChangeText={(text) => {this.onChangeUsername(text)}}
                    value={this.state.username}/>

                  <Form
                    style={registerStyles.form}
                    placeholder={"Correo electronico"}
                    onChangeText={(text) => {this.onChangeEmail(text)}}
                    value={this.state.email}/>

                  <Form
                    style={registerStyles.form}
                    placeholder={"Contraseña"}
                    secureTextEntry={true}
                    onChangeText={(text) => {this.onChangePassword(text)}}
                    value={this.state.password}/>
              <Buttons
                  titleStyle={registerStyles.buttonText}
                  buttonStyle={registerStyles.button}
                  Title={"Registrar"}
                  onPress={()=>{this.onRegister()}}/>
          </View>
        </Container>
    );
  }
}


export default register;
