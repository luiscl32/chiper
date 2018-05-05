import {StyleSheet,Dimensions} from 'react-native';

/*=============================================>>>>>
= styles =
===============================================>>>>>*/
export const productStyles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  image:{
    marginTop: "25%",
    marginBottom: "20%",
    width: 179,
    height: 60,
  },
  listContainer:{
    width: "100%",
    height: 120,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContainer:{
    paddingLeft: 10,
    marginBottom: 10,
  },
  stockContainer:{
    width: "100%",
    height: 25,
    backgroundColor: "#0872FD",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  searchContainerStyle:{
    width: "100%",
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#70B4EC",
  },
  innerContainerStyle:{
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#B0D7F8",
    backgroundColor: "#7FBBF1"
  },
  /*----------- textos -----------*/
  titleText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: 'center'
  },
  icon:{
    color: "#FFF",
    fontSize: 16,
  },
  searchIcon:{
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold'
  },
  title:{
    color: "#5EABFC",
    fontSize: 16,
  },
  forgotText:{
    marginTop: 10,
    color: "#A6E7FC",
    fontSize: 16
  },
  buttonText:{
    color: "#92a6c1",
    fontSize: 16
  },
  footerText:{
    marginTop: "5%",
    color: "#89C4EC",
    fontWeight: 'bold',
    fontSize: 16
  },
  footerTextButton:{
    marginTop: 10,
    color: "#D2E391",
    fontWeight: 'bold',
    fontSize: 16
  },
  fullprices:{
    color: "#B6B6B6",
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    textAlign: 'center'
  },
  fullpricesSubtitle:{
    color: "#B6B6B6",
    fontSize: 14,
    textAlign: 'center'
  },
  managerprices:{
    color: "#212121",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17
  },
  managerpricesSubtitle:{
    color: "#212121",
    textAlign: 'center',
  },
  customerprice:{
    color: "#B6B6B6",
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    textAlign: 'center'
  },
  customerpriceSubtile:{
    color: "#B6B6B6",
    fontSize: 14,
    textAlign: 'center'
  },
  descriptionTitle:{
    color: "#6C6C6C",
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left'
  },
  descriptionSubtitle:{
    color: "#9D9D9D",
    textAlign: 'left',
    fontSize: 14
  },
  stockText:{
    color: "#fff",
    fontSize: 14,
    textAlign: 'center'
  },
  /*----------- form -----------*/
  searchInputStyle:{
    width: "100%",
    height: 30,
    textAlign: 'left',
    color: "#fff",
    fontSize: 16
  },
  /*----------- buttons -----------*/
  button:{
    width: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 40,
    backgroundColor: "#fff"
  },
  /*----------- header -----------*/
  header:{
    width: "100%",
    height: 50,
    alignItems: 'center',
    backgroundColor: "#80BCF2",
  },
  /*----------- Thumbnail -----------*/
  thumbnail:{
    width: "20%",
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  /*----------- bodyContainer -----------*/
  bodyContainer:{
    width: "80%",
    height: 120,
    marginTop: 15,
    marginBottom: 15,
  },
  /*----------- pricesContainer -----------*/
  pricesContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  pricesDescriptionContainer:{
    alignItems: 'center',
    justifyContent: 'center'
  }

});
/*= End of styles =*/
/*=============================================<<<<<*/
