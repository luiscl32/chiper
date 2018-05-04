
/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
  'use strict';

  import React, { Component } from 'react';
  import {Container, Content } from 'native-base';
  import {

    View,
  } from 'react-native';
  import {Actions} from 'react-native-router-flux';
  import {Headers, Buttons, Form} from '../commons';
  import {registerStyles} from './styles';
/*= End of dependencias =*/
/*=============================================<<<<<*/


class register extends Component {
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
        <Content>
          <View style={registerStyles.container}>

          </View>
        </Content>
      </Container>
    );
  }
}


export default register;
