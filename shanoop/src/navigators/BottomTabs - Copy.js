import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen,CartScreen} from '../screens';

const BottomTabs = createBottomTabNavigator();

export default () => {
  <BottomTabs.Navigator >
    {/*<BottomTabs.Screen name="Cart" component={CartScreen}/>*/}
  </BottomTabs.Navigator>
};