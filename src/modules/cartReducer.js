const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
})

export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    payload: item,
})

const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item)
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item).filter((item) => item.quantity > 0),
            }

        default:
            return state;
    }
}

export default cartReducer;