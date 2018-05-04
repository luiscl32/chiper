/*=============================================>>>>>
= dependencias =
===============================================>>>>>*/
import {combineReducers} from 'redux';
/* reducers */
import Products from './products.reducers'

/*= End of dependencias =*/
/*=============================================<<<<<*/


/*=============================================>>>>>
= combine reducers =
===============================================>>>>>*/
  const reducers = combineReducers({
    products: Products,
  });
/*= End of combine reducers =*/
/*=============================================<<<<<*/
  export default reducers;
