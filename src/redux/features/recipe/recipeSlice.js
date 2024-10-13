import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};
console.log(initialState);
export const recipeSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existItem = state.cartItems.find(
                (x) => x.id === action.payload.id
            );
            if (existItem) {
                existItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(
                (x) => x.id === action.payload.id
            );
            if (item && item.quantity < 5) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(
                (x) => x.id === action.payload.id
            );
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
    },
});

export const { addToCart, removeItem, incrementQuantity, decrementQuantity } =
    recipeSlice.actions;
export default recipeSlice.reducer;
