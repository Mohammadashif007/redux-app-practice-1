import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "./api/recipeApi";
import cartReducer from "./features/recipe/recipeSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [recipeApi.reducerPath]: recipeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipeApi.middleware),
});
