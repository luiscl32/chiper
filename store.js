/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/

import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

/*=============================================>>>>>
= store =
===============================================>>>>>*/
  export default createStore(
    reducers,
    applyMiddleware(
      thunk,
      promise,
    ));
/*= End of store =*/
/*=============================================<<<<<*/
