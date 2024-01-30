import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState : {
        items:[]
    },
    reducers:{
        addItems:(items,action){

        },
        removeItems:(items,action){

        }
    }
})
export const {addItems,removeItems} = reducers
export default cartSlice;