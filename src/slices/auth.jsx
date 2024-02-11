import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    token : localStorage.getItem('token')? JSON.parse(localStorage.getItem('token')) : null, // basically localStorage is used to store the token in the browser so that the user doesn't have to login again and again
};

const authSlice = createSlice({
    name : 'auth',
    initialState : initialState,
    reducers : {
        setToken(state,value){
            state.token = value.payload; // this is used to set the token in the state
        }
    }
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer;