const initialState = {
    wishlist: [],
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const exists = state.wishlist.some(item => item.id === action.payload.id);
            return {
                ...state,
                wishlist: exists
                    ? state.wishlist.filter(item => item.id !== action.payload.id) :
                    [...state.wishlist, action.payload]
            }

        default:
            return state;
    }
};

export const toggleFavorite = (product) => ({
    type: "TOGGLE_FAVORITE",
    payload: product,
})

export default favouriteReducer;