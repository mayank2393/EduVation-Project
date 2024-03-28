import {combineReducers} from '@reduxjs/toolkit'; // this basically combines all the reducers into a single reducer which can be used in the store thus making it easier to manage the store
import authReducer from '../slices/authSlice';
import cartReducer from '../slices/cartSlice';
import profileReducer from '../slices/profileSlice';

const rootReducer = combineReducers({
    auth : authReducer,
    profile : profileReducer,
    cart : cartReducer
})

export default rootReducer;