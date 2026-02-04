import AsyncStorage from "@react-native-async-storage/async-storage";

const setFirstTimeUse = () =>{
    return AsyncStorage.setItem('isFirstTimeUse','true');
};

const getFirstTimeUse = () =>{
    return AsyncStorage.getItem('isFirstTimeUse');
}

const setTocken = (tocken) =>{
    return AsyncStorage.setItem('tocken',tocken);
};

const getTocken = () =>{
    return AsyncStorage.getItem('tocken');
}

export  default {setFirstTimeUse,getFirstTimeUse,setTocken,getTocken};