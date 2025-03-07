// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import WIshlistScreen from "../screens/WishlistScreen";

const Stack = createStackNavigator();


function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='CartScreen'
          component={CartScreen}
          options={{ headerShown: true , headerTitle: "My Cart", headerTitleAlign:"center"}}  />
        <Stack.Screen
          name='Wishlist'
          component={WIshlistScreen}
          options={{ headerShown: true, headerTitleAlign:"center" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
