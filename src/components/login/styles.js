import {StyleSheet,Dimensions} from 'react-native';

/*=============================================>>>>>
= styles =
===============================================>>>>>*/
export const loginStyles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#0671f5"
  },
  image:{
    marginTop: "25%",
    marginBottom: "20%",
    width: 179,
    height: 60,
  },
  /*----------- textos -----------*/
  titleText: {
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
  /*----------- form -----------*/
  form:{
    width: "80%",
    height: 40,
    marginTop: 20,
    backgroundColor: "#0769e4",
    textAlign: 'center',
    color: "#3a93f3",
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
  /*----------- footer -----------*/
  footer:{
    flex: 1,
    width: "100%",
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: "#0769e4",
  }
});
/*= End of styles =*/
/*=============================================<<<<<*/
