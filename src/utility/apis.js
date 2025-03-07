export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
    } catch (error) {
      console.error('API Fetch Error:', error);
      dispatch({ type: 'FETCH_PRODUCTS_ERROR', error: error.message });
    }
  };
};
