import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CartScreenView from './view';
import { addToCart, removeFromCart } from '../../modules/cartReducer';

const CartScreen = ({ cart, addToCart, removeFromCart }) => {
    const [cartItems, setCartItems] = useState(cart);

    useEffect(() => {
        setCartItems(cart); 
    }, [cart]);

    const increaseQuantity = (item) => {
        addToCart(item);
    };

    const decreaseQuantity = (item) => {
        removeFromCart(item);
    };

    return (
        <CartScreenView
            cartItems={cartItems}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
        />
    );
};

const mapStateToProps = (state) => ({
    cart: state?.cartReducer?.cart || [],
});

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
