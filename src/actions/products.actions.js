import {GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR} from './types';
import axios from 'axios';
/*=============================================>>>>>
= actions =
===============================================>>>>>*/
/*----------- fetching -----------*/

  export const getProductsFetching = () => {
    return {
      type: GET_PRODUCTS_FETCH
    }
  }

/*----------- fetched -----------*/
  export const getProductsFetched = () => {
    return ((dispatch) => {
      axios.get('http://beta.lb-api.chiper.co/Products')
        .then((res)=>{
          getProductsFetching();
          dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: res
          });
        })
        .catch((err)=>{
          getProductsError();
        });
    })
  }

/*----------- fetch error -----------*/
  export const getProductsError = () => {
    return{
      type: GET_PRODUCTS_ERROR
    }
  }
/*= End of actions =*/
/*=============================================<<<<<*/
