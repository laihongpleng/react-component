import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchProducts } from "../services/homeService";
 
//action
export const getCategoryAction = createAsyncThunk('home/getCategory', async () => {
    const data = await fetchCategories();
    return data;
});


export const getProductAction = createAsyncThunk('home/getProduct', async () => {
    const data = await fetchProducts();
    return data;
})

/*
createAsyncThunk ->
    it provide  asynchronous logic  and 
Automatically generates pending, fulfilled, and rejected action types.
 
*/

const homeStore = createSlice({
    name : 'homeData', 
    initialState : {
        categories : [],
        products : [],
        status : 'idle',  //idle, loading, success
        error : null
    },
    extraReducers : (builder) => {
        builder
            .addCase(getCategoryAction.fulfilled,(state, action) => {
               state.categories = action.payload;  //Getting data from service response
            })
            .addCase(getProductAction.fulfilled,(state, action) => {
                state.products = action.payload;
            })
    }
});  

//createSlice -> we  used it for buiding action and state
export default homeStore;