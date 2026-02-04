import {ApiConstants} from '../constants';
import axios from 'axios';
import {authHeader} from '../utils/Generator';
import {getTocken} from '../Store';

const getRestaurants = async () => {
  console.log(`RestaurantsService | getRestaurants`);
  try {
    let restaurantResponse = await axios.get(
      `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.RESTAURANTS}`,
      {
        headers: authHeader(getTocken()),
      },
    );
    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: `Restaurant data fetched`,
        data: restaurantResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Restaurant data not found`,
      };
    }
  } catch (error) {
    
    return {
      status: false,
      message: `Restaurant data not found`,
    };
  }
};

const getOneRestaurantById = async restaurantId => {
  
  console.log(`RestaurantsService | getOneRestaurantById`);
  try {
    let restaurantResponse = await axios.get(
      `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.RESTAURANTS}/${restaurantId}`,
      {
        headers: authHeader(getTocken()),
      },
    );
    if (restaurantResponse?.status === 200) {
      return {
        status: true,
        message: `Restaurant data fetched`,
        data: restaurantResponse?.data?.data,
      };
    } else {
      return {
        status: false,
        message: `Restaurant data not found`,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: `Restaurant data not found`,
    };
  }
};

export default {getRestaurants,getOneRestaurantById};