import { useGetRecipeQuery } from "../../redux/api/recipeApi";
import Recipe from "../Recipe/Recipe";

const RecipesContainer = () => {
    const { data, isLoading, isSuccess } = useGetRecipeQuery();
    console.log(data);
    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold text-center p-6">All Delicious Recipes</h1>
            {isLoading ? (
                <span className="loading loading-spinner loading-lg "></span>
            ) : null}
            <div className="grid grid-cols-3 gap-5">
            {data &&
                isSuccess &&
                data.map((recipe) => (
                    <Recipe key={recipe.id} recipe={recipe}></Recipe>
                ))}
            </div>
        </div>
    );
};

export default RecipesContainer;
