import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginBottom: 10,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        color: '#888',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    quantity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 8,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomView:{
        height: 50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:0.1
    },
    checkoutButton:{
        justifyContent:'center',
        borderRadius:20,
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:'red'
    },
    topView:{backgroundColor:'white', padding:10, borderRadius: 15, elevation:5, flex:1}
});

export default styles;
