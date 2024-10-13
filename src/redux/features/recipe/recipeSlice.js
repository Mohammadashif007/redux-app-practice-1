import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};
console.log(initialState);
export const recipeSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const existItem = state.cartItems.find(x => x.id === action.payload.id)
            if(existItem){
                existItem.quantity+=1
            }
            else{
                state.cartItems.push({...action.payload, quantity: 1})
            }
        },
    },
});

export const { addToCard } = recipeSlice.actions;
export default recipeSlice.reducer;
