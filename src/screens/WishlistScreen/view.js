import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const WishlistView = ({ item, removeFromWishlist, addToCart , toggleFavorite}) => {
    return (
        <View style={styles.itemContainer}>
                      <Image source={{ uri: 'https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg' }} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.price}>${item.id}/kg</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => toggleFavorite(item)}
                    style={styles.wishlistButton}
                >
                   <Icon name="heart" size={30} color="#900" /> 
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => addToCart(item)}
                    style={styles.cartButton}
                >
                    <Icon name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WishlistView;
