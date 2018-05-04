/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
  'use-strict'
  import React, {Component} from 'react';
  import {Router, Scene} from 'react-native-router-flux';
  /* rutas */
  import Login from './src/components/login';
  import Forgot from './src/components/forgotPassword';
  import Register from './src/components/register';
  import Products from './src/components/products';
/*= End of dependencias =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= component =
===============================================>>>>>*/

  class routes extends Component {
    render() {
      return (
        <Router>
          <Scene key="root">
            {/*----------- login -----------*/}
            <Scene
            key="login"
            component={Login}
            hideNavBar={true}
            initial
            />
            {/* forgot password */}
            <Scene
              key="forgotPassword"
              component={Forgot}
              title="forgot"
              />
            {/* register */}
            <Scene
              key="register"
              component={Register}
              title="register"
              hideNavBar={true}
              />
          {/*----------- products -----------*/}
            <Scene
              key="products"
              component={Products}
              title="test"
              />
          </Scene>
        </Router>
      );
    }
  }
/*= End of component =*/
/*=============================================<<<<<*/
export default routes;
