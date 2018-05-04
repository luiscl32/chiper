/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
'use strict'
import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
/*= End of dependencias =*/
/*=============================================<<<<<*/

/**
 *
 * props
 * @params
 * Title: String
 * titleStyle: object
 * buttonStyle: object
 * onPress: function
 */

/*=============================================>>>>>
= component =
===============================================>>>>>*/
  export const Buttons = ({Title, titleStyle, buttonStyle, onPress}) => (
    <TouchableOpacity
      onPress={onPress.bind(this)}
      style={buttonStyle}>
        <Text style={titleStyle}>{Title}</Text>
    </TouchableOpacity>
  );
/*= End of component =*/
/*=============================================<<<<<*/
