import {createStore,applyMiddleware} from 'redux';
import Reducers from './reducers';
import {thunk} from 'redux-thunk';


const Store = createStore(Reducers,applyMiddleware(thunk));
const getTocken = () => Store?.getState()?.generalState?.tocken;

export  {Store,getTocken};