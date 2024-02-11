import {combineReducers} from '@reduxjs/toolkit'; // this basically combines all the reducers into a single reducer which can be used in the store thus making it easier to manage the store
import authReducer from '../slices/auth'

const rootReducer = combineReducers({
    auth : authReducer,
    
})

export default rootReducer;