const initialState = {
    products: [],
    error: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload }
        case 'FETCH_PRODUCTS_ERROR':
            return { ...state, error: action.error }

        default:
            return state;
    }
}

export const fetchProducts = () => async dispatch => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json();
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data })
    } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', error: error.message })
    }
}

export default productReducer;