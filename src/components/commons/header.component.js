/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
'use strict'
import React from 'react';
import {Header, Left, Body, Right, Icon} from 'native-base';
import {TouchableOpacity,Text} from 'react-native';
/*= End of dependencias =*/
/*=============================================<<<<<*/

/**
 *
 * props
 * @params
 * Title : String
 * IconName: String
 * onPress: function
 * style: object
 */

/*=============================================>>>>>
= component =
===============================================>>>>>*/

export const Headers = ({IconName,iconStyle,onPress, Title, titleStyle, headerStyle}) => (
  <Header style={headerStyle}>
    <Left>
      <TouchableOpacity onPress={onPress.bind(this)}>
        <Icon
            style={iconStyle}
            name={IconName}
          />
      </TouchableOpacity>
    </Left>
    <Body>
      <Text style={titleStyle}>{Title}</Text>
    </Body>
  </Header>
);


/*= End of component =*/
/*=============================================<<<<<*/
