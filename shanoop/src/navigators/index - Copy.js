import React ,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, Header} from '@react-navigation/stack';
import {SplashScreen,WelcomeScreen,SigninScreen,SignupScreen,RegisterPhoneScreen,HomeScreen,ForgotPasswordScreen,RestaurantScreen,CartScreen} from '../screens';
import HomeTabs from './BottomTabs';
import {useSelector,useDispatch} from 'react-redux';
import { GeneralAction } from '../actions';

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
          
           <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen}></Stack.Screen>
          </>
          
        )
        }
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigators;