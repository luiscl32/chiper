/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
'use strict';

import React, { Component } from 'react';
import {Container, Content, } from 'native-base';
import {Image,View,Text,Alert, KeyboardAvoidingView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Headers, Buttons, Form} from '../commons';
import {forgotStyles} from './styles';


/*= End of dependencias =*/
/*=============================================<<<<<*/


class forgot extends Component {
  /*----------- constructor -----------*/
    constructor(props) {
      super(props);

      this.state = {
        email: '',
      };
    }
  /*----------- components -----------*/
  /*----------- funciones -----------*/
  /* handles */
  onChangeEmail(email){
    this.setState({email})
  }

  /* onRegister */
  onRegister(){
    const {email} = this.state;
    if( email !== '' ) {
      Alert.alert(
        'Aviso',
        'Se ha enviado un correo',
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
          headerStyle={forgotStyles.header}
          IconName={"arrow-back"}
          iconStyle={forgotStyles.icon}
          Title={"Recuperar contraseña"}
          titleStyle={forgotStyles.title}
          onPress={()=>{Actions.pop()}}
        />
      <View style={forgotStyles.container}>
            <Image
              style={forgotStyles.image}
              source={require('../../../assets/images/logo-2.png')}
            />
          {/*----------- body -----------*/}
            <Text style={forgotStyles.titleText}>Recupera tu contraseña</Text>

                  <Form
                    style={forgotStyles.form}
                    placeholder={"Correo electronico"}
                    onChangeText={(text) => {this.onChangeEmail(text)}}
                    value={this.state.email}/>

              <Buttons
                  titleStyle={forgotStyles.buttonText}
                  buttonStyle={forgotStyles.button}
                  Title={"Enviar correo"}
                  onPress={()=>{this.onRegister()}}/>
          </View>
        </Container>
    );
  }
}



export default forgot;
