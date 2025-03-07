import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../modules/favouriteReducer';
import { addToCart } from '../../modules/cartReducer';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenHeader from "../../components/ScreenHeader";

const HomeScreenView = ({ products, wishlist, cart, toggleFavorite, addToCart, removeFromCart }) => {
    const navigation = useNavigation(); 

    const handleWishlistClick = (item) => {
        toggleFavorite(item); 
        navigation.navigate('Wishlist'); 
    };

    const handleAddToCart = (item) => {
        addToCart(item); 
        navigation.navigate('CartScreen'); 
    };
    

const renderItem = ({ item }) => {
    const isFavorite = wishlist.some((wishItem) => wishItem.id === item.id);
    const cartItem = cart.find((cartItem) => cartItem.id === item.id);
    const itemQuantity = cartItem ? cartItem.quantity : 0; 
    return (
        <View style={styles.itemContainer}>
                      <Image source={{ uri: 'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg' }} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.price}>${item.id}/kg</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleWishlistClick(item)}
                    style={[styles.button, isFavorite ? styles.activeButton : null]}
                >
                    {isFavorite ? <Icon name="heart" size={30} color="#900" />: <Icon name="heart-o" size={30} color="#900" /> }
                </TouchableOpacity>

                {itemQuantity > 0 ? (
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity onPress={() => removeFromCart(item)}>
                            <Text style={styles.button}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.quantityText}>{itemQuantity}</Text>

                        <TouchableOpacity onPress={() => addToCart(item)}>
                            <Text style={styles.button}>+</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity
                        onPress={() => addToCart(item)}
                        style={styles.addToCartButton}
                    >
                        <Icon name="shopping-cart" size={30} color="#000" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

    return (
        <View style={styles.container}>
            <ScreenHeader handleCartButton = {() => navigation.navigate('CartScreen')}
                headerTitle={"Products"}/>
            <FlatList
                data={products}
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
    cart: state?.cartReducer?.cart || [],
    products: state?.productReducer?.products || [], 
});

const mapDispatchToProps = {
    toggleFavorite,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenView);
