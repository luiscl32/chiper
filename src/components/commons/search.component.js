/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
import React from 'react';
import {TextInput,View,Text} from 'react-native';
import {Icon} from 'native-base';
/*= End of dependencias =*/
/*=============================================<<<<<*/
/**
 *
 * props
 * @params
 * searchContainerStyle, innerContainerStyle,searchInputStyle, iconStyle: object
 * onChangeText function
 */
/*=============================================>>>>>
= component =
===============================================>>>>>*/
  export const Search = ({searchContainerStyle,innerContainerStyle,searchInputStyle,iconStyle,onChangeText,text}) => (
    <View style={searchContainerStyle}>
      <View style={innerContainerStyle}>
        <View style={{width: "15%", height: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name={"ios-search"} style={iconStyle}/>
        </View>
        <View style={{width: "85%", height: 30,alignItems: 'flex-start',justifyContent: 'center'}}>
          <TextInput
            style={searchInputStyle}
            placeholder={"Buscar"}
            placeholderTextColor={"#fff"}
            value={text}
            onChangeText={onChangeText.bind(this)}
            underlineColorAndroid="transparent"/>
        </View>
      </View>
    </View>
  );
/*= End of component =*/
/*=============================================<<<<<*/
