import { AuthenticationService,StorageService, UserService } from "../services";
import CartAction from "./CartAction";

const types ={
    SET_IS_APP_LOADING:'SET_IS_APP_LOADING',
    SET_TOCKEN:'SET_TOCKEN',
    SET_FIRST_TIME_USE:'SET_FIRST_TIME_USE',
    SET_USER_DATA: 'SET_USER_DATA',
};

const setIsAppLoading = (isAppLoading) =>{
    return{
        type:types.SET_IS_APP_LOADING,
        payload: isAppLoading
    };

};

const setTocken = (tocken) =>{
    return{
        type:types.SET_TOCKEN,
        payload: tocken
    };
};
const setIsFirstTimeUse = () =>{
    return{
        type:types.SET_FIRST_TIME_USE,
        payload: false
    };
};


const appStart =() =>{
    return (dispatch,getState)=>{
        StorageService.getFirstTimeUse().then(isFirstTimeUse =>{
            dispatch({
                type: types.SET_FIRST_TIME_USE,
                payload: isFirstTimeUse ? false : true,
            });

        });
        StorageService.getTocken().then(tocken =>{
            if(tocken){
                    dispatch({
                type: types.SET_TOCKEN,
                payload: tocken,
            });
            UserService.getUserData().then(userResponse =>{
                if(userResponse?.status)
                {
                    dispatch({
                        type : types.SET_USER_DATA,
                        payload: userResponse?.data,
                    });
                    dispatch(CartAction.getCartItems());
                    dispatch({
                        type: types.SET_IS_APP_LOADING,
                        payload: false
                    });
                } else if(userResponse?.message === 'TokenExpiredError')
                {
                    AuthenticationService.refreshToken().then(tokenResponse =>{
                        if(tokenResponse?.status){
                        dispatch({
                            type: types.SET_TOCKEN,
                            payload: tokenResponse?.data
                        });
                        UserService.getUserData().then(userResponse =>{
                            if(userResponse?.status){
                                dispatch({type:types.SET_USER_DATA,payload:userResponse?.data,});
                                dispatch({type: types.SET_IS_APP_LOADING,payload:false,});
                            }
                        });
                        }else
                        {
                            dispatch({type: types.SET_TOCKEN,payload:''});
                            dispatch({type: types.SET_IS_APP_LOADING,payload:false});
                        }
                    });
                    
                }
                
            });
            }
        dispatch({
            type: types.SET_IS_APP_LOADING,
            payload: false,
        });
            
        });
    };
};

export default {setIsAppLoading,setTocken,appStart,setIsFirstTimeUse,types};