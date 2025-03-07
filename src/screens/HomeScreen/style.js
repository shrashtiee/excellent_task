import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    row: {
        justifyContent: 'space-between',
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 8
        // alignItems: 'center',
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeButton: {
        backgroundColor: '#ffcccc',
    },
    activeCartButton: {
        backgroundColor: '#cce5ff',
    },
    buttonText: {
        fontSize: 14,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 5,
        width: 110,
    },

    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 5,
    },

    addButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },

    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    cartIconContainer: {
        position: 'relative',
    },

    cartBadge: {
        position: 'absolute',
        top: -5,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    addToCartButton: {
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    }


});
