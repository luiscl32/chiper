const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  error: false
};



export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_FETCH":
      return {...state,fetched: false, fetching: true, error: false}
    case "GET_PRODUCTS_SUCCESS":
      return {...state,...action.payload, fetched: true, fetching: false, error: false}
    case "GET_PRODUCTS_SUCCESS":
      return {...state, fetched: false, fetching: false, error: true}  
  default:
      return state;
  }
};
