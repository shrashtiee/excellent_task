import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../utility/apis';
import { addToCart, removeFromCart } from '../../modules/cartReducer';
import HomeScreenView from './view';

const HomeScreen = ({ products, fetchProducts, cart, favorites, addToCart, removeFromCart }) => {
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  const isInCart = (id) => cart.some(item => item.id === id);
  const isFavorite = (id) => favorites.includes(id);

  return <HomeScreenView 
            products={products} 
            isFavorite={isFavorite} 
            isInCart={isInCart} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
         />;
};


const mapStateToProps = state => ({
    products: state.productReducer.products || [],
    cart: state.cartReducer?.cartItems ?? [],  
    favorites: state.favouriteReducer?.favorites ?? [],  
});


const mapDispatchToProps = {
  fetchProducts,
  addToCart,
  removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
