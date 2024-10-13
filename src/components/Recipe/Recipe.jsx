import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/recipe/recipeSlice";

const Recipe = ({ food }) => {
    const { name, image, caloriesPerServing } = food;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(food))
    }
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="food"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className="font-bold">Price: ${caloriesPerServing}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
