import { useDispatch } from "react-redux";
import { addToCard } from "../../redux/features/recipe/recipeSlice";

const Recipe = ({ food }) => {
    const { name, image } = food;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCard(food))
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
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
