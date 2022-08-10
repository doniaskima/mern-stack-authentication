import { createSlice, createAsynThunk } from '@reduxjs/toolkit';


// get user from localStorage

const user = JSON.parse(localStorage.getItem('user'))
    //because localStorage only have string 
const intialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: "auth",
    intialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: () => {}
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;