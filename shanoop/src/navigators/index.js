import React ,{useEffect} from 'react';
import {NavigationContainer,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator, Header} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SplashScreen,WelcomeScreen,SigninScreen,SignupScreen,RegisterPhoneScreen,HomeScreen,ForgotPasswordScreen,RestaurantScreen,CartScreen} from '../screens';
import {useSelector,useDispatch} from 'react-redux';
import {Display} from '../utils';
import {Colors} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GeneralAction } from '../actions';
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown : false, tabBarStyle: {
        position: 'absolute',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: Display.setHeight(8),
        backgroundColor: Colors.DEFAULT_WHITE,
        borderTopWidth: 0,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.DEFAULT_GREEN,
      tabBarInactiveTintColor: Colors.INACTIVE_GREY,}} op>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="home-outline" size={23} color={color} />
        ),
      }}/>
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="cart-outline" size={23} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();


const Navigators = () => {
  const {isAppLoading,tocken,isFirstTimeUse} = useSelector(state =>state.generalState);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {isAppLoading ? (
          <Stack.Screen name='Splash' component={SplashScreen}></Stack.Screen>
        ): !tocken || tocken === null || tocken === '' ? (
          <>
          {isFirstTimeUse && (
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
            )}
        
        <Stack.Screen name='Signin' component={SigninScreen}></Stack.Screen>
        <Stack.Screen name='Signup' component={SignupScreen}></Stack.Screen>
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name='RegisterPhone' component={RegisterPhoneScreen}></Stack.Screen>
        </>):(
          
          <>
           <Stack.Screen name="HomeTabs" component={HomeTabs}  />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            </>
        )
      }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigators;