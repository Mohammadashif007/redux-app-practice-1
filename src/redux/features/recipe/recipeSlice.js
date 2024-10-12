import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipe: []
}

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {

    }
})


// export const {} = recipeSlice.actions;
// export default recipeSlice.reducer;