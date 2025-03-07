import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import WishlistView from './view';
import styles from './style'; 
import { removeFromWishlist, toggleFavorite } from '../../modules/favouriteReducer';
import { addToCart } from '../../modules/cartReducer';

const WishlistScreen = ({ wishlist, removeFromWishlist, addToCart, toggleFavorite }) => {
    const renderItem = ({ item }) => (
        <WishlistView 
            item={item} 
            toggleFavorite={toggleFavorite} 
            addToCart={addToCart}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList 
                data={wishlist} 
                renderItem={renderItem} 
                keyExtractor={(item) => item.id.toString()} 
                numColumns={2} 
                columnWrapperStyle={styles.row} 
            />
        </View>
    );
};

const mapStateToProps = (state) => ({
    wishlist: state?.favouriteReducer?.wishlist || [],
});

const mapDispatchToProps = {
    toggleFavorite,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistScreen);
