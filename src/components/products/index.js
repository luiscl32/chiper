

/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
'use strict';

import React, { Component } from 'react';
import {Container, Content,ListItem,Left,Right,Body,Thumbnail } from 'native-base';
import {Image,View,Text, FlatList} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import {Headers, Search} from '../commons';
import {productStyles} from './styles';
import moment from 'moment';
/* redux */
import {getProductsFetched} from '../../actions';
import {connect} from 'react-redux';


/* const */
const date = new Date();
const fecha_actual =  date.getFullYear() +"-"+ (date.getMonth() + 1) + "-" + date.getDate();
const ITEMS_POR_PAG = 20;
/*= End of dependencias =*/
/*=============================================<<<<<*/


/*=============================================>>>>>
= render =
===============================================>>>>>*/

    class products extends Component {
      /*----------- constructor -----------*/
      constructor(props) {
        super(props);

        this.state = {
          data: [],
          initialData: [],
          page: 1,
          search: '',
          onSearch: false,
        };
      }
/*= End of constructor =*/
/*=============================================<<<<<*/


      /*----------- components -----------*/
      componentWillMount() {
        this.props.getProducts();
      }

      componentWillReceiveProps(nextProps) {
        this.setState({data: nextProps.products.data.slice(0,19),initialData: nextProps.products.data})
      }

/*= End of components =*/
/*=============================================<<<<<*/


      /*----------- funciones -----------*/
      cargarMas(){
        const {page, data, initialData,onSearch} = this.state;
        const inicio =  page*ITEMS_POR_PAG;
        const fin = (page+1)*ITEMS_POR_PAG-1;

        const newData = initialData.slice(inicio, fin);
        switch (onSearch) {
          case true:
            this.setState({data: data})
            break;
          case false:
            this.setState({data: [...data, ...newData]})
            break;
          default:
            this.setState({data: [...data, ...newData]})
        }

      }

      /*calcularDias*/
      calcularDias(fecha_act,fecha_exp){

        var fechaA = moment(fecha_act);
        var fechaB = moment(fecha_exp);
        var diff = fechaA.diff(fechaB,'days');

        if(diff > 0 ){
          return diff;
        }else{
          return 0
        }
      }

      /*cargarImages*/
      cargarImages(item){
        if(item !== undefined){
          return item.thumb;
        }else{
          return "https://upload.wikimedia.org/wikipedia/commons/6/66/Sin_datos.jpg";
        }
      }


      /* onChangeSearch */
      onChangeSearch(search){
        this.setState({search,onSearch: true});
        this._searchItem(search);
      }

      /* searchItem */
      _searchItem(text){
        const {data,initialData} = this.state;
        const newData = initialData.filter((item) =>{

          const itemData = item.reference.name.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData)>-1;
        });

        this.setState({data: newData})
      }

      /* renderList */
      _renderList(item,i){
        var fecha_act = moment(fecha_actual,"YYYY-MM-DD").format('YYYY-MM-DD');
        var fecha_exp = moment(item.expiredAt,"YYYY-MM-DD").format('YYYY-MM-DD');
        var diff = this.calcularDias(fecha_act,fecha_exp);
        var thumb = this.cargarImages(item.reference.image);

        return (
          <View style={productStyles.listContainer}>
            <View style={productStyles.thumbnail}>
              <Thumbnail square source={{uri: thumb}}/>
              <View style={productStyles.stockContainer}>
                  <Text style={productStyles.stockText}>{item.stock} UND</Text>
              </View>
            </View>


            <View style={productStyles.bodyContainer}>
              <View style={productStyles.descriptionContainer}>
                <Text style={productStyles.descriptionTitle}>{item.reference.description}</Text>
                <Text style={productStyles.descriptionSubtitle}>Quedan: {item.stock} UND | {diff}  Dias </Text>
              </View>

              <View style={productStyles.pricesContainer}>

                 <View style={productStyles.pricesDescriptionContainer}>
                   <Text style={productStyles.fullprices}>${item.fullPrice}</Text>
                   <Text style={productStyles.fullpricesSubtitle}>En mercado</Text>
                 </View>

                 <View style={productStyles.pricesDescriptionContainer}>
                   <Text style={productStyles.managerprices}>${item.managerPrice}</Text>
                   <Text style={productStyles.managerpricesSubtitle}>Lo compras</Text>
                 </View>

                 <View style={productStyles.pricesDescriptionContainer}>
                   <Text style={productStyles.customerprice}>${item.customerPrice}</Text>
                   <Text style={productStyles.customerpriceSubtile}>Lo vendes</Text>
                 </View>
              </View>
            </View>
          </View>
        );
      }
/*= End of funciones =*/
/*=============================================<<<<<*/


      /*----------- render -----------*/

      render() {
        return (
          <Container>
            <Headers
              headerStyle={productStyles.header}
              IconName={"arrow-back"}
              iconStyle={productStyles.icon}
              Title={"ALPINA"}
              titleStyle={productStyles.titleText}
              onPress={()=>{Actions.pop()}}
            />
              <View style={productStyles.container}>

                <Search
                  searchContainerStyle={productStyles.searchContainerStyle}
                  innerContainerStyle={productStyles.innerContainerStyle}
                  iconStyle={productStyles.searchIcon}
                  searchInputStyle={productStyles.searchInputStyle}
                  value={this.state.search}
                  onChangeText={(text) => {this.onChangeSearch(text)}}/>

                <FlatList
                  data={this.state.data}
                  keyExtractor={(item,index) => index.toString()}
                  renderItem={({item,index}) => this._renderList(item,index)}
                  onEndReached={()=>{this.cargarMas()}}/>
              </View>
          </Container>
        );
      }
    }

/*= End of render =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= redux =
===============================================>>>>>*/

  const mapToStateToProps = state => {
    return {
      products: state.products
    }
  }

  const mapToDispatchToProps = dispatch => {
    return {
      getProducts: () => dispatch(getProductsFetched())
    }
  }
/*= End of redux =*/
/*=============================================<<<<<*/



export default connect(mapToStateToProps,mapToDispatchToProps)(products);
