
/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/

'use strict';
import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {loginStyles} from './styles';
/* commons */
import {Form, Buttons} from '../commons';
import {Actions} from 'react-native-router-flux';
/*= End of dependencias =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= components =
===============================================>>>>>*/

class login extends Component {
  /*----------- constructor -----------*/
    constructor(props) {
      super(props);

      this.state = {
        username: '',
        password: ''
      };
    }
  /*----------- components -----------*/
  /*----------- funciones -----------*/
    /* handles */
    onChangeUsername(username){
      this.setState({username})
    }

    onChangePassword(password){
      this.setState({password})
    }

    /* goTo */
    goToForgetPassword(){
      Actions.forgotPassword();
    }

    goToRegister(){
      Actions.register();
    }

    onLogin(){
      const {username, password} = this.state;

      /* dummy login */
      if(username === 'test' && password === 'test123'){
          Actions.products();
      }else if(username === '' && password === ''){
        Alert.alert(
          'Error',
          'Debe ingresar un usuario y una contraseña',
        );
      }else{
        Alert.alert(
          'Error',
          'usuario o contraseña incorrecto',
        );
      }
    }
  /*----------- render -----------*/



  render() {
    return (
      <View style={loginStyles.container}>
        <Image
          style={loginStyles.image}
          source={require('../../../assets/images/logo-2.png')}
        />
      {/*----------- body -----------*/}
        <Text style={loginStyles.titleText}>Inicia sesión</Text>

        <Form
          style={loginStyles.form}
          placeholder={"Número de Documento"}
          onChangeText={(text) => {this.onChangeUsername(text)}}
          value={this.state.username}/>

          <Form
            style={loginStyles.form}
            placeholder={"Contraseña"}
            secureTextEntry={true}
            onChangeText={(text) => {this.onChangePassword(text)}}
            value={this.state.password}/>

            <Buttons
                titleStyle={loginStyles.forgotText}
                Title={"Olvidé mi contraseña"}
                onPress={()=>{this.goToForgetPassword()}}/>

            <Buttons
                titleStyle={loginStyles.buttonText}
                buttonStyle={loginStyles.button}
                Title={"Iniciar sesión"}
                onPress={()=>{this.onLogin()}}/>
              {/* footer buttons */}
              <View style={loginStyles.footer}>
                <Text style={loginStyles.footerText}> ¿Todavia no estas registrado?</Text>
                <Buttons
                    titleStyle={loginStyles.footerTextButton}
                    Title={"QUIERO SER CHIPER"}
                    onPress={()=>{this.goToRegister()}}/>
              </View>

      </View>
    );
  }
}

/*= End of components =*/
/*=============================================<<<<<*/



export default login;
