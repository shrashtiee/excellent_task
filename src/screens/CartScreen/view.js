import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const CartScreenView = ({ cartItems, onIncrease, onDecrease }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.id * item.quantity, 0);

    return (
        <View style={styles.container}>
            <View style = {styles.topView}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                         <Image source={{ uri:"https://img.freepik.com/free-photo/colorful-fruits-tasty-fresh-ripe-juicy-white-desk_179666-169.jpg" }}
                       style={styles.itemImage} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemPrice}>${item.id}</Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => onDecrease(item)}>
                                <Text style={styles.button}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => onIncrease(item)}>
                                <Text style={styles.button}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            </View>
            <View style = {styles.bottomView}>
                 <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
                 <TouchableOpacity style = {styles.checkoutButton}>
                    <Text style = {styles.totalPrice}>Checkout</Text>
                 </TouchableOpacity>
                 </View>
           
        </View>
    );
};

export default CartScreenView;
