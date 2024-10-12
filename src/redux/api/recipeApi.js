import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
    reducerPath: "recipeApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/"}),
    endpoints: (builder) => ({
        getRecipe: builder.query({
            query: () => "recipes"
        })
    })
})


export const {useGetRecipeQuery} = recipeApi;
