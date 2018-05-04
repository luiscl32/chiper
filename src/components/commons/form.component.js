/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
  'use-strict'
  import React from 'react';
  import {TextInput,Text} from 'react-native';
/*= End of dependencias =*/
/*=============================================<<<<<*/

/**
 *
 * props
 * @params
 * text: String
 * placeholder: String
 * keyboardType: String
 * secureTextEntry: bool
 * onChangeText: function
 * style: object
 */


/*=============================================>>>>>
= component =
===============================================>>>>>*/
  export const Form = ({text,placeholder, keyboardType,secureTextEntry, style,onChangeText}) => (
    <TextInput
      style={style}
      placeholder={placeholder}
      value={text}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText.bind(this)}
      underlineColorAndroid="transparent"
    />
  );


/*= End of component =*/
/*=============================================<<<<<*/
