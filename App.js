/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/

import React from 'react';
/* store */
import store from './store';
import {Provider} from 'react-redux';
/* rutas */
import Routes from './routes'


/*= End of dependencias =*/
/*=============================================<<<<<*/

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}
